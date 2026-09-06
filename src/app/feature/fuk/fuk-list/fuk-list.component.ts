import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MenuItem, SortEvent } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { catchError, of, Subscription } from 'rxjs';
import { FukService } from 'src/app/data-access/fuk/fuk.service';
import { SessionContextService } from 'src/app/data-access/state/session-context.service';
import { ENTITY_CONFIG, FukScreenConfig, GENERIC_SIFARNIK_CONFIG, SPECIAL_SIFARNIK_CONFIG } from '../fuk.config';
import { FukFormModalComponent } from '../shared/fuk-form-modal.component';

@Component({
  selector: 'app-fuk-list',
  templateUrl: './fuk-list.component.html',
  providers: [DialogService, ConfirmationService]
})
export class FukListComponent implements OnInit, OnDestroy {
  rows: any[] = [];
  loading = true;
  items: MenuItem[] = [];
  contextData: any;
  context: MenuItem[] = [
    { label: 'Izmeni', icon: 'pi pi-fw pi-pencil', command: () => this.handleEdit(this.contextData) },
    { label: 'Obriši', icon: 'pi pi-fw pi-trash', command: () => this.handleDelete(this.contextData) }
  ];
  config!: FukScreenConfig;
  kind: 'sifarnik' | 'entity' = 'sifarnik';
  validanOptions = [
    { label: 'Svi', value: null },
    { label: 'Da', value: 1 },
    { label: 'Ne', value: 0 }
  ];
  private ref: DynamicDialogRef | undefined;
  private sessionSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private fukService: FukService,
    public sessionContext: SessionContextService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const key = params.get('key') || '';
      this.kind = this.route.snapshot.data['kind'] ?? 'sifarnik';
      this.config = this.kind === 'entity'
        ? ENTITY_CONFIG[key]
        : (SPECIAL_SIFARNIK_CONFIG[key] ?? GENERIC_SIFARNIK_CONFIG[key]);
      if (!this.config) {
        this.rows = [];
        this.loading = false;
        this.items = [{ label: 'Nepoznat šifarnik' }];
        return;
      }
      this.items = [{ label: this.config?.label ?? 'Šifarnik' }];
      this.loadRows();
    });

    this.route.queryParamMap.subscribe(() => {
      if (this.config) {
        this.loadRows();
      }
    });

    this.sessionSub = this.sessionContext.changes$.subscribe(() => {
      if (this.config) {
        this.loadRows();
      }
    });
  }

  ngOnDestroy(): void {
    this.sessionSub?.unsubscribe();
  }

  handleCreate(): void {
    this.openModal('create');
  }

  handleEdit(row: any): void {
    this.openModal('edit', row);
  }

  handleDelete(row: any): void {
    if (!row?.id) {
      return;
    }

    this.confirmationService.confirm({
      message: 'Da li ste sigurni da želite da obrišete ovaj unos?',
      header: 'Brisanje',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Obriši',
      rejectLabel: 'Otkaži',
      accept: () => {
        this.fukService.delete(this.config.route, row.id).pipe(
          catchError((error) => {
            console.error(error);
            return of(null);
          })
        ).subscribe((result) => {
          if (result !== null) {
            this.loadRows();
          }
        });
      }
    });
  }

  handleSort(event: SortEvent): void {
    const data = [...(event.data ?? [])];
    data.sort((rowA, rowB) => {
      const field = event.field ?? 'sifra';
      const result = compareNatural(rowA?.[field], rowB?.[field]);
      return (event.order ?? 1) * result;
    });
    this.rows = data;
  }

  formatCell(row: any, field: string): string {
    const value = row?.[field];
    if (field === 'is_active' || field.startsWith('role_')) {
      return value === 1 || value === true ? 'Da' : 'Ne';
    }
    if (value instanceof Date) {
      return value.toLocaleDateString('sr-RS');
    }
    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) {
      return value.slice(0, 10);
    }
    return value ?? '';
  }

  private openModal(mode: 'create' | 'edit', row?: any): void {
    const defaults = this.kind === 'entity' && this.config.key === 'evidencija-aktivnosti'
      ? { tip: this.route.snapshot.queryParamMap.get('tip') }
      : {};
    this.ref = this.dialogService.open(FukFormModalComponent, {
      header: `${mode === 'create' ? 'Kreiranje' : 'Izmena'} — ${this.config.label}`,
      width: '880px',
      contentStyle: { overflow: 'hidden', padding: '0.75rem 1.25rem 1rem' },
      styleClass: 'fuk-dynamic-dialog',
      breakpoints: { '960px': '95vw', '640px': '98vw' },
      baseZIndex: 10000,
      maximizable: true,
      data: { mode, config: this.config, row: row ? { ...defaults, ...row } : { ...defaults } }
    });
    this.ref.onClose.subscribe((result) => {
      if (result?.reload) {
        this.loadRows();
      }
    });
  }

  private loadRows(): void {
    const companyId = this.sessionContext.getCompanyId();
    if (!this.config || !companyId) {
      this.rows = [];
      this.loading = false;
      return;
    }

    this.loading = true;
    const request = this.config.manage
      ? this.fukService.getAllManage(this.config.route, companyId)
      : this.fukService.getAll(this.config.route, companyId);

    request.pipe(
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    ).subscribe((rows) => {
      const tip = this.route.snapshot.queryParamMap.get('tip');
      const filtered = tip ? rows.filter((row) => row.tip === tip) : rows;
      this.rows = [...filtered].sort((rowA, rowB) => compareNatural(rowA?.sifra ?? rowA?.redni_broj, rowB?.sifra ?? rowB?.redni_broj));
      this.loading = false;
    });
  }
}

const compareNatural = (left: any, right: any): number => {
  const leftParts = tokenize(left);
  const rightParts = tokenize(right);
  const length = Math.max(leftParts.length, rightParts.length);

  for (let index = 0; index < length; index++) {
    const leftPart = leftParts[index] ?? Number.NEGATIVE_INFINITY;
    const rightPart = rightParts[index] ?? Number.NEGATIVE_INFINITY;
    if (leftPart === rightPart) {
      continue;
    }
    if (typeof leftPart === 'number' && typeof rightPart === 'number') {
      return leftPart - rightPart;
    }
    return String(leftPart).localeCompare(String(rightPart), 'sr', { numeric: true, sensitivity: 'base' });
  }

  return 0;
};

const tokenize = (value: any): Array<number | string> => {
  const text = String(value ?? '').trim();
  if (!text) {
    return [];
  }
  return text.split(/(\d+)/).filter(Boolean).map((part) => {
    const asNumber = Number(part);
    return Number.isNaN(asNumber) ? part : asNumber;
  });
};
