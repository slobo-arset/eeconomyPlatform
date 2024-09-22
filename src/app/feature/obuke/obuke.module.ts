import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObukaListaComponent } from './obuka-lista/obuka-lista.component';
import { RouterModule, Routes } from '@angular/router';
import { ObukaPregledComponent } from './obuka-pregled/obuka-pregled.component';
import { UiModule } from 'src/app/ui/ui.module';

const routes: Routes = [
  { path: 'obuka/:id/:naslov', component: ObukaListaComponent },
  { path: 'obuka/:id/video/:vid', component: ObukaPregledComponent },
];

@NgModule({
  declarations: [
    ObukaListaComponent,
    ObukaPregledComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule
  ],
  exports: [
    RouterModule,
    ObukaListaComponent
  ]
})
export class ObukeModule { }
