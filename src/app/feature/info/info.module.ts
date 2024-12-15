import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VrstePoreskePrijaveComponent } from './vrste-poreske-prijave/vrste-poreske-prijave.component';
import { PoreskiRokoviComponent } from './poreski-rokovi/poreski-rokovi.component';
import { InformatorComponent } from './informator/informator.component';
import { BudzetskiRokoviComponent } from './budzetski-rokovi/budzetski-rokovi.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from 'src/app/ui/ui.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';


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
    BudzetskiRokoviComponent,
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
    DialogModule,
    InputTextareaModule
  ]
})
export class InfoModule { }
