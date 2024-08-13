import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  valCheck: string[] = ['remember'];

  pretplata: any[];


  password!: string;
  selectedCity!: string;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {
  }

  ngOnInit() {
    this.pretplata = [
        { name: 'TROMESEČNA PRETPLATA - 18000 + pdv 20%', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  }

  isLogin() {}
}
