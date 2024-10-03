
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObukaListaComponent } from './obuka-lista/obuka-lista.component';
import { RouterModule, Routes } from '@angular/router';
import { ObukaPregledComponent } from './obuka-pregled/obuka-pregled.component';
import { UiModule } from 'src/app/ui/ui.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

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
    UiModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    DropdownModule
  ],
  exports: [
    RouterModule,
    ObukaListaComponent,
  ]
})
export class ObukeModule { }
