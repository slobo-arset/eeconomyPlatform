import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { UiModule } from 'src/app/ui/ui.module';
import { FukListComponent } from './fuk-list/fuk-list.component';
import { FukFieldsComponent } from './shared/fuk-fields.component';
import { FukFormModalComponent } from './shared/fuk-form-modal.component';

const routes: Routes = [
  { path: 'sifarnici/:key', component: FukListComponent, data: { kind: 'sifarnik' } },
  { path: ':key', component: FukListComponent, data: { kind: 'entity' } }
];

@NgModule({
  declarations: [
    FukListComponent,
    FukFieldsComponent,
    FukFormModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    DropdownModule,
    InputSwitchModule,
    CalendarModule,
    ContextMenuModule,
    DynamicDialogModule,
    ConfirmDialogModule
  ]
})
export class FukModule {}
