import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UlazneFaktureComponent } from './ulazne-fakture/ulazne-fakture.component';
import { RouterModule, Routes } from '@angular/router';
import { IzlazneFaktureComponent } from './izlazne-fakture/izlazne-fakture.component';
import { ExportSpiriComponent } from './export-spiri/export-spiri.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { UiModule } from 'src/app/ui/ui.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { UlazneFaktureSingleComponent } from './ulazne-fakture/ulazne-fakture-single/ulazne-fakture-single.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';


const routes: Routes = [
  { path: 'ulazne', component: UlazneFaktureComponent },
  { path: 'ulazne/:id', component: UlazneFaktureSingleComponent },
  { path: 'izlazne', component: IzlazneFaktureComponent },
  { path: 'generisanje-plaćanja', component: ExportSpiriComponent },
];

@NgModule({
  declarations: [
    UlazneFaktureComponent,
    UlazneFaktureSingleComponent,
    IzlazneFaktureComponent,
    ExportSpiriComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
    TableModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    DropdownModule
  ],
  exports: [
    RouterModule,
    UlazneFaktureComponent,
    ExportSpiriComponent
  ]
})
export class EFaktureModule { }
