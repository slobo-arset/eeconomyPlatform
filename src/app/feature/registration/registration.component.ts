import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  pretplata: any[] = [
    { name: 'TROMESEČNA PRETPLATA - 18000 + pdv 20%', code: 'PR3' },
    { name: 'ŠESTOMESEČNA PRETPLATA - 33000 + pdv 20%', code: 'PR6' },
    { name: 'GODIŠNJA PRETPLATA - 54000 + pdv 20%', code: 'PR12' },
    { name: 'GODIŠNJA PRETPLATA - AKCIJSKA CENA - 45000 + pdv 20%', code: 'PRA12' }
];


  password!: string;
  selectedPretplata!: string;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    aggrement: new FormControl(false),
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams
    .pipe(takeUntil(this.destroy$))
    .subscribe(params => {
      const tip = params['tip'];

      if (tip) {
        const foundOption = this.pretplata.find(option => option.code === tip);

        if (foundOption) {
          this.selectedPretplata = foundOption;
        } else {
          console.warn('No matching subscription found for the given tip parameter.');
        }
      } else {
        console.warn('The tip parameter is missing in the URL.');
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  isLogin() {}
}
