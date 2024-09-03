import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful-registration',
  templateUrl: './successful-registration.component.html',
  styleUrl: './successful-registration.component.scss'
})
export class SuccessfulRegistrationComponent {

  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  redirectToSite(): void {
    window.location.href = 'https://e-economy.biz/';
  }
}
