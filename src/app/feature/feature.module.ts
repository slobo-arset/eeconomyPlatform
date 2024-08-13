import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpDashboardComponent } from './cp-dashboard/cp-dashboard.component';
import { CpLoginComponent } from './cp-login/cp-login.component';
import { BlagajnaModule } from './blagajna/blagajna.module';
import { FinansijeModule } from './finansije/finansije.module';
import { IzvestajiModule } from './izvestaji/izvestaji.module';
import { ObradaModule } from './obrada/obrada.module';
import { ParametriModule } from './parametri/parametri.module';
import { PdvModule } from './pdv/pdv.module';
import { RecepcijaModule } from './recepcija/recepcija.module';
import { UserModule } from './user/user.module';
import { ListaKlijenataComponent } from './administracija/lista-klijenata/lista-klijenata.component';
import { AdminModule } from './administracija/admin.module';
import { EditComponent } from './user/edit/edit.component';
import { FiskalniIzvestajComponent } from './user/fiskalni-izvestaj/fiskalni-izvestaj.component';
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import { RegistrationComponent } from './registration/registration.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    CpDashboardComponent,
    CpLoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({  }),
    AdminModule,
    BlagajnaModule,
    FinansijeModule,
    IzvestajiModule,
    ObradaModule,
    ParametriModule,
    PdvModule,
    RecepcijaModule,
    UserModule,
    CheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule
  ]
})
export class FeatureModule { }
