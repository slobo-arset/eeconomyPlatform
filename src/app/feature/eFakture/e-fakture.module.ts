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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PodesavanjeComponent } from './podesavanje/podesavanje.component';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const routes: Routes = [
  { path: 'ulazne', component: UlazneFaktureComponent },
  { path: 'ulazne/:id', component: UlazneFaktureSingleComponent },
  { path: 'izlazne', component: IzlazneFaktureComponent },
  { path: 'generisanje-plaćanja', component: ExportSpiriComponent },
  { path: 'podesavanje', component: PodesavanjeComponent },
];

@NgModule({
  declarations: [
    UlazneFaktureComponent,
    UlazneFaktureSingleComponent,
    IzlazneFaktureComponent,
    ExportSpiriComponent,
    PodesavanjeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    UiModule,
    TableModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    ProgressSpinnerModule
  ],
  exports: [
    RouterModule,
    UlazneFaktureComponent,
    ExportSpiriComponent
  ]
})
export class EFaktureModule { }
