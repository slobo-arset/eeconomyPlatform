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
import { InputNumberModule } from 'primeng/inputnumber';
import { PretplateComponent } from './administracija/pretplate/pretplate.component';
import { TableModule } from 'primeng/table';
import { CompanyComponent } from './user/company/company.component';
import { EmployeesComponent } from './user/employees/employees.component';

@NgModule({
  declarations: [
    CpDashboardComponent,
    CpLoginComponent,
    RegistrationComponent,
    PretplateComponent,
    CompanyComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({  }),
    CheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    PasswordModule,
    ButtonModule,
    InputNumberModule,
    TableModule
  ]
})
export class FeatureModule { }
