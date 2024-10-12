
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
import { ObukaAdminPregledComponent } from './obuka-admin-pregled/obuka-admin-pregled.component';
import { ObukaAdminListaComponent } from './obuka-admin-lista/obuka-admin-lista.component';

const routes: Routes = [
  { path: 'obuka/:id/:naslov', component: ObukaListaComponent },
  { path: 'obuka/:id/video/:vid', component: ObukaPregledComponent },
  { path: 'obuka/admin/:id/:naslov', component: ObukaAdminListaComponent },
  { path: 'obuka/admin/:id/video/:vid', component: ObukaAdminPregledComponent },
];

@NgModule({
  declarations: [
    ObukaListaComponent,
    ObukaPregledComponent,
    ObukaAdminPregledComponent,
    ObukaAdminListaComponent
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
