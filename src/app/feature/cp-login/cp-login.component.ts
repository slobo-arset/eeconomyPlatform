import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {Store} from '@ngrx/store';
import {LoginData} from "../../interface/auth";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data-access/auth/auth.service';
import { catchError, Observable, of, switchMap, tap } from 'rxjs';

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
    private authService: AuthService
  ) {
  }

  isLogin() {
    console.log(JSON.stringify(this.loginForm.value));
    const dataLogin: LoginData = {username: this.loginForm.value.username!, password: this.loginForm.value.password!};

    this.authService.login(dataLogin).subscribe({
      next: (data) => {
        // Success: Store the token and navigate to a protected route
        localStorage.setItem('accessToken', data.token);
        this.router.navigate(['/dashboard']);  // Redirect to the dashboard or another protected route
      },
      error: (error) => {
        // Error: Handle the error (e.g., display an error message)
        //this.displayMessageService.emitLoginFailed();  // Custom service to handle error messages
        console.log('Login failed:', error);
      }
    });
    //this.store.dispatch(login({data: dataLogin}));
  }

  goToRegistration(){
    this.router.navigate(['pretplata']);
  }
}
