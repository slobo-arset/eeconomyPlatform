import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from "./layout/app.layout.component";
import {CpLoginComponent} from "./feature/cp-login/cp-login.component";
import {CpDashboardComponent} from "./feature/cp-dashboard/cp-dashboard.component";
import {AuthGuard} from "./util/guards/auth.guard";
import { RegistrationComponent } from './feature/registration/registration.component';

const routes: Routes = [
  {path: 'login', component: CpLoginComponent},
  {path: 'pretplata', component: RegistrationComponent},
  {
    path: '', component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: CpDashboardComponent},
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
