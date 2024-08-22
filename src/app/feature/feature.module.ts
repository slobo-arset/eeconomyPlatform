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
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { LogListaComponent } from './administracija/log-lista/log-lista.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    CpDashboardComponent,
    CpLoginComponent,
    RegistrationComponent,
    PretplateComponent,
    CompanyComponent,
    EmployeesComponent,
    LogListaComponent
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
    TableModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    InputSwitchModule,
    ChartModule
  ]
})
export class FeatureModule { }
