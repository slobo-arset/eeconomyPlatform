import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from "./layout/app.layout.component";
import {CpLoginComponent} from "./feature/cp-login/cp-login.component";
import {CpDashboardComponent} from "./feature/cp-dashboard/cp-dashboard.component";
import {AuthGuard} from "./util/guards/auth.guard";
import { RegistrationComponent } from './feature/registration/registration.component';
import { PretplateComponent } from './feature/administracija/pretplate/pretplate.component';
import { CompanyComponent } from './feature/user/company/company.component';

const routes: Routes = [
  {path: 'login', component: CpLoginComponent},
  {path: 'pretplata', component: RegistrationComponent},
  {
    path: '', component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: CpDashboardComponent},
      {path: 'users', component: CompanyComponent},
      {path: 'subscription', component: PretplateComponent},
      {path: 'profile', component: CpDashboardComponent},

      {path: 'xml/convertor', component: CpDashboardComponent},
      {path: 'employees', component: CpDashboardComponent},
      // {
      //   path: 'administracija',
      //   loadChildren: () => import('../app/feature/administracija/admin.module').then(m => m.AdminModule)
      //  },
      //  {
      //   path: 'korisnik',
      //   loadChildren: () => import('../app/feature/user/user.module').then(m => m.UserModule)
      //  },
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
