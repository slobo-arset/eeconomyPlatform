import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObukaListaComponent } from './obuka-lista/obuka-lista.component';
import { RouterModule, Routes } from '@angular/router';
import { ObukaPregledComponent } from './obuka-pregled/obuka-pregled.component';

const routes: Routes = [
  { path: 'obuka/:id', component: ObukaListaComponent },
  { path: 'obuka/:id/video/:vid', component: ObukaPregledComponent },
];

@NgModule({
  declarations: [
    ObukaListaComponent,
    ObukaPregledComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    ObukaListaComponent
  ]
})
export class ObukeModule { }
