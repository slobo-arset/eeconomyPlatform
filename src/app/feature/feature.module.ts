import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpDashboardComponent } from './cp-dashboard/cp-dashboard.component';
import { CpLoginComponent } from './cp-login/cp-login.component';
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import { RegistrationComponent } from './registration/registration.component';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    CpDashboardComponent,
    CpLoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({  }),
    CheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    PasswordModule,
    ButtonModule
  ]
})
export class FeatureModule { }
