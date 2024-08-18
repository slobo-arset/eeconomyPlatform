import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {Store} from '@ngrx/store';
import {LoginData} from "../../interface/auth";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data-access/auth/auth.service';
import { catchError, Observable, of, switchMap, tap } from 'rxjs';
import { MainStateService } from 'src/app/data-access/state/main-state.service';

@Component({
  selector: 'app-cp-login',
  templateUrl: './cp-login.component.html',
  styleUrls: ['./cp-login.component.scss']
})
export class CpLoginComponent {
  valCheck: string[] = ['remember'];

  password!: string;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private store: Store,
    private router: Router,
    private authService: AuthService,
    private mainStateService: MainStateService
  ) {
  }

  isLogin() {
    const dataLogin: LoginData = {username: this.loginForm.value.username!, password: this.loginForm.value.password!};

    this.authService.login(dataLogin).subscribe({
      next: (data: any) => {
        this.mainStateService.setAppState({user:data.user})
        localStorage.setItem('accessToken', data.token);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.log('Login failed:', error);
      }
    });
  }

  goToRegistration(){
    this.router.navigate(['pretplata']);
  }
}
