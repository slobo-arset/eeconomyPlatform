import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { catchError, of } from 'rxjs';
import { DisplayMessageService } from 'src/app/data-access/message/message.service';
import { FukService } from 'src/app/data-access/fuk/fuk.service';
import { SessionContextService } from 'src/app/data-access/state/session-context.service';
import { FukField, FukScreenConfig } from '../fuk.config';

@Component({
  selector: 'app-fuk-form-modal',
  templateUrl: './fuk-form-modal.component.html'
})
export class FukFormModalComponent {
  form: FormGroup;
  configScreen: FukScreenConfig;
  optionsMap: Record<string, any[]> = {};
  mode: 'create' | 'edit' = 'create';

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
    private fukService: FukService,
    private sessionContext: SessionContextService,
    private displayMessage: DisplayMessageService
  ) {
    this.configScreen = this.dialogConfig.data.config;
    this.mode = this.dialogConfig.data.mode;
    this.form = this.buildForm(this.configScreen.fields);

    this.loadDropdowns();
    if (this.dialogConfig.data.row) {
      this.patchRow(this.dialogConfig.data.row);
    }

    this.form.valueChanges.subscribe(() => this.updateComputed());
  }

  handleSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.displayMessage.emitMandatoryFieldsEmpty();
      return;
    }

    const companyId = this.sessionContext.getCompanyId();
    const payload = this.toPayload(this.form.getRawValue(), companyId);
    const request = this.mode === 'create'
      ? this.fukService.create(this.configScreen.route, payload)
      : this.fukService.update(this.configScreen.route, this.dialogConfig.data.row.id, payload);

    request.pipe(
      catchError((error) => {
        console.error(error);
        this.displayMessage.emitError('Snimanje nije uspelo. Proverite unos i pokušajte ponovo.');
        return of('error');
      })
    ).subscribe((result) => {
      if (result !== 'error') {
        this.ref.close({ reload: true });
      }
    });
  }

  handleClose(): void {
    this.ref.close();
  }

  private buildForm(fields: FukField[]): FormGroup {
    const group: Record<string, any> = {};
    fields.forEach((field) => {
      const validators = field.required ? [Validators.required] : [];
      const initial = field.key === 'is_active'
        ? 1
        : (field.type === 'switch' ? false : (field.type === 'number' || field.type === 'computed' ? null : ''));
      group[field.key] = [{ value: initial, disabled: field.readonly || field.type === 'computed' }, validators];
    });
    return this.fb.group(group);
  }

  private loadDropdowns(): void {
    const companyId = this.sessionContext.getCompanyId();
    if (!companyId) {
      return;
    }

    this.configScreen.fields
      .filter((field) => field.type === 'dropdown' && field.sifarnikRoute)
      .forEach((field) => {
        this.fukService.getAll(field.sifarnikRoute as string, companyId).subscribe((rows) => {
          const mapped = rows.map((row) => ({
            ...row,
            naziv: row.sifra ? `${row.sifra} — ${row.naziv}` : row.naziv
          }));
          this.optionsMap = { ...this.optionsMap, [field.key]: mapped };
        });
      });
  }

  private patchRow(row: any): void {
    const patch: Record<string, any> = {};
    this.configScreen.fields.forEach((field) => {
      let value = row[field.key];
      if (field.type === 'date' && value) {
        value = new Date(value);
      }
      if (field.type === 'switch') {
        value = value === 1 || value === true;
      }
      patch[field.key] = value;
    });
    this.form.patchValue(patch);
    this.updateComputed();
  }

  private updateComputed(): void {
    if (this.configScreen.key === 'registar-rizika') {
      const uticaj = Number(this.form.get('uticaj')?.value) || 0;
      const verovatnoca = Number(this.form.get('verovatnoca')?.value) || 0;
      this.form.get('rangiranje')?.setValue(uticaj * verovatnoca, { emitEvent: false });
    }
  }

  private toPayload(value: any, companyId: number | null): any {
    const payload: any = { company_id: companyId, is_active: 1 };
    this.configScreen.fields.forEach((field) => {
      let fieldValue = value[field.key];
      if (field.type === 'date' && fieldValue instanceof Date && !Number.isNaN(fieldValue.getTime())) {
        const year = fieldValue.getFullYear();
        const month = String(fieldValue.getMonth() + 1).padStart(2, '0');
        const day = String(fieldValue.getDate()).padStart(2, '0');
        fieldValue = `${year}-${month}-${day}`;
      }
      if (field.type === 'switch') {
        fieldValue = fieldValue ? 1 : 0;
      }
      if (field.type === 'computed') {
        fieldValue = this.form.get(field.key)?.value;
      }
      if (fieldValue === '' || fieldValue === undefined) {
        fieldValue = null;
      }
      payload[field.key] = fieldValue;
    });
    return payload;
  }
}
