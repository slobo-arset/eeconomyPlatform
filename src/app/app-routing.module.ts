import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from "./layout/app.layout.component";
import {CpLoginComponent} from "./feature/cp-login/cp-login.component";
import {CpDashboardComponent} from "./feature/cp-dashboard/cp-dashboard.component";
import {AuthGuard} from "./util/guards/auth.guard";
import { RegistrationComponent } from './feature/registration/registration.component';
import { PretplateComponent } from './feature/administracija/pretplate/pretplate.component';
import { CompanyComponent } from './feature/user/company/company.component';
import { LogListaComponent } from './feature/administracija/log-lista/log-lista.component';
import { EmployeesComponent } from './feature/user/employees/employees.component';
import { SuccessfulRegistrationComponent } from './feature/registration/successful-registration/successful-registration.component';
import { ProfileComponent } from './feature/administracija/profile/profile.component';
import { PodesavanjeComponent } from './feature/eFakture/podesavanje/podesavanje.component';

const routes: Routes = [
  {path: 'login', component: CpLoginComponent},
  {path: 'pretplata', component: RegistrationComponent},
  {path: 'uspesna-registracija', component: SuccessfulRegistrationComponent},
  {
    path: '', component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: CpDashboardComponent},
      {path: 'users', component: CompanyComponent},
      {path: 'subscription', component: PretplateComponent},
      {path: 'profile', component: PodesavanjeComponent},
      {path: 'log-lista', component: LogListaComponent},
      {path: 'employees', component: EmployeesComponent},
      {
        path: 'e-fakture',
        loadChildren: () => import('../app/feature/eFakture/e-fakture.module').then(m => m.EFaktureModule)
       },
       {
        path: 'obuka',
        loadChildren: () => import('../app/feature/obuke/obuke.module').then(m => m.ObukeModule)
       },

       {
        path: 'obračuni',
        loadChildren: () => import('../app/feature/obracuni/obracuni.module').then(m => m.ObracuniModule)
       },
       {
        path: 'šifarnici',
        loadChildren: () => import('../app/feature/codebook/codebook.module').then(m => m.CodebookModule)
       },
       {
        path: 'info',
        loadChildren: () => import('../app/feature/info/info.module').then(m => m.InfoModule)
       },
      //  {
      //   path: 'parametri',
      //   loadChildren: () => import('../app/feature/parametri/parametri.module').then(m => m.ParametriModule)
      //  },
      // {
      //   path: 'obrada',
      //   loadChildren: () => import('../app/feature/obrada/obrada.module').then(m => m.ObradaModule)
      // },

      {
        path: '**',
        component: CpDashboardComponent
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
