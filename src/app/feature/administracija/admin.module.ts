import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaKlijenataComponent } from './lista-klijenata/lista-klijenata.component';
import { AdminKlijentComponent } from './admin-klijent/admin-klijent.component';

const routes: Routes = [
  {
    path: 'lista-klijenta',
    component: ListaKlijenataComponent,
  },
  {
    path: 'novi-klijent',
    component: AdminKlijentComponent,
  },
  {
    path: 'izmena-klijenta/:id',
    component: AdminKlijentComponent,
  },
  
];



@NgModule({
  declarations: [
    ListaKlijenataComponent,
    AdminKlijentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
