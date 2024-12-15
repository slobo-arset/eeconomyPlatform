import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VrstePoreskePrijaveComponent } from './vrste-poreske-prijave/vrste-poreske-prijave.component';
import { PoreskiRokoviComponent } from './poreski-rokovi/poreski-rokovi.component';
import { InformatorComponent } from './informator/informator.component';
import { BudzetskiRokoviComponent } from './budzetski-rokovi/budzetski-rokovi.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'e-rokovi/vrste-prijave', component: VrstePoreskePrijaveComponent },
  { path: 'e-rokovi/poreski-rokovi', component: PoreskiRokoviComponent },
  { path: 'e-rokovi/budzetski-rokovi', component: BudzetskiRokoviComponent },
  { path: 'e-informator', component: InformatorComponent },
];


@NgModule({
  declarations: [
    VrstePoreskePrijaveComponent,
    PoreskiRokoviComponent,
    InformatorComponent,
    BudzetskiRokoviComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class InfoModule { }
