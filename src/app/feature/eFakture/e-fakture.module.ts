import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UlazneFaktureComponent } from './ulazne-fakture/ulazne-fakture.component';
import { RouterModule, Routes } from '@angular/router';
import { IzlazneFaktureComponent } from './izlazne-fakture/izlazne-fakture.component';
import { ExportSpiriComponent } from './export-spiri/export-spiri.component';


const routes: Routes = [
  { path: 'ulazne', component: UlazneFaktureComponent },
  { path: 'izlazne', component: IzlazneFaktureComponent },
  { path: 'generisanje-plaćanja', component: ExportSpiriComponent },
];

@NgModule({
  declarations: [
    UlazneFaktureComponent,
    IzlazneFaktureComponent,
    ExportSpiriComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    UlazneFaktureComponent,
    ExportSpiriComponent
  ]
})
export class EFaktureModule { }
