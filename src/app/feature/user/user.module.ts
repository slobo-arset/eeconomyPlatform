import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { FiskalniIzvestajComponent } from './fiskalni-izvestaj/fiskalni-izvestaj.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: 'fiskalni-itvestaj',
    component: FiskalniIzvestajComponent,
  },

];

@NgModule({
  declarations: [
    EditComponent,
    FiskalniIzvestajComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModule { }
