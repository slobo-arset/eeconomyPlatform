import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {Store} from '@ngrx/store';
import {LoginData} from "../../interface/auth";
import { Router } from '@angular/router';

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
    private router: Router
  ) {
  }

  isLogin() {
    console.log(JSON.stringify(this.loginForm.value));
    const dataLogin: LoginData = {username: this.loginForm.value.username!, password: this.loginForm.value.password!};

    //this.store.dispatch(login({data: dataLogin}));
  }

  goToRegistration(){
    this.router.navigate(['pretplata']);
  }
}
