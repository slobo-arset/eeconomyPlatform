import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from 'src/app/ui/ui.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EkonomskaKlasifikacijaComponent } from './ekonomska-klasifikacija/ekonomska-klasifikacija.component';
import { EkonomskaKlasifikacijaModalComponent } from './ekonomska-klasifikacija/ekonomska-klasifikacija-modal/ekonomska-klasifikacija-modal.component';
import { ContextMenuModule } from 'primeng/contextmenu';
import { InplaceModule } from 'primeng/inplace';

const routes: Routes = [
  { path: 'ekonomska-klasifikacija', component: EkonomskaKlasifikacijaComponent },
]

@NgModule({
  declarations: [
    EkonomskaKlasifikacijaComponent,
    EkonomskaKlasifikacijaModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
        TableModule,
    ButtonModule,
    SidebarModule,
    InplaceModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    DropdownModule,
    InputSwitchModule,
    ContextMenuModule
  ],
  exports: [
    RouterModule,


  ]
})
export class CodebookModule { }
