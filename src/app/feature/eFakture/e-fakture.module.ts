import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UlazneFaktureComponent } from './ulazne-fakture/ulazne-fakture.component';
import { RouterModule, Routes } from '@angular/router';
import { IzlazneFaktureComponent } from './izlazne-fakture/izlazne-fakture.component';


const routes: Routes = [
  { path: 'ulazne', component: UlazneFaktureComponent },
  { path: 'izlazne', component: IzlazneFaktureComponent },
];

@NgModule({
  declarations: [
    UlazneFaktureComponent,
    IzlazneFaktureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    UlazneFaktureComponent
  ]
})
export class EFaktureModule { }
