import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FukField } from '../fuk.config';

@Component({
  selector: 'app-fuk-fields',
  templateUrl: './fuk-fields.component.html'
})
export class FukFieldsComponent {
  @Input() form!: FormGroup;
  @Input() fields: FukField[] = [];
  @Input() optionsMap: Record<string, any[]> = {};

  getOptionLabel = (field: FukField) => field.optionLabel ?? 'naziv';
  getOptionValue = (field: FukField) =>
    field.optionValue ?? (field.sifarnikRoute || field.key.endsWith('_id') ? 'id' : 'naziv');

  getFieldColClass = (field: FukField): string => {
    if (field.type === 'textarea' || field.type === 'computed') {
      return 'col-12';
    }
    if (field.type === 'switch') {
      return 'col-12 md:col-4';
    }
    return 'col-12 md:col-6';
  };
}
