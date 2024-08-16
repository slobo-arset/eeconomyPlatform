import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DisplayMessageService } from 'src/app/data-access/message/message.service';

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
    companyName: new FormControl('', Validators.required),
    pib: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{9}$')]),
    jbkjs: new FormControl(''),
    contactPerson: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    postCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}$')]),
    contactNumber: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConf: new FormControl('', Validators.required),
    aggrement: new FormControl(false, Validators.requiredTrue),
    aggrementPolis: new FormControl(false, Validators.requiredTrue),
  }, { validators: this.passwordMatchValidator });

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const passwordConf = group.get('passwordConf')?.value;
    return password === passwordConf ? null : { passwordMismatch: true };
  }

  constructor(
    private route: ActivatedRoute,
    private displayMessageService: DisplayMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams
    .pipe(takeUntil(this.destroy$))
    .subscribe(params => {
      const tip = params['tip'];

      if (tip) {
        const foundOption = this.pretplata.find(option => option.code === tip);
        if (foundOption) {
          this.selectedPretplata = foundOption;
        }
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  isLogin() {
    console.log(this.loginForm.value)

    if (!this.loginForm.get('aggrement')?.value) {
      this.displayMessageService.emitMustAgreeTerms();
      return;
    }
    if (!this.loginForm.get('aggrementPolis')?.value) {
      this.displayMessageService.emitMustAgreePrivacy();
      return;
    }


    if (this.loginForm.invalid) {
      this.displayMessageService.emitMandatoryFieldsEmpty();
      this.markFormGroupTouched(this.loginForm);
      return;
    }

    this.loginForm.reset({
      companyName: '',
      pib: '',
      jbkjs: '',
      contactPerson: '',
      city: '',
      address: '',
      postCode: '',
      contactNumber: '',
      email: '',
      password: '',
      passwordConf: '',
      aggrement: false,
      aggrementPolis: false
    });

    this.loginForm.reset({
      aggrement: this.loginForm.get('aggrement')?.value,
      aggrementPolis: this.loginForm.get('aggrementPolis')?.value,
    });
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  openTerms(){
    window.open('https://e-economy.biz/politika-privatnosti/', '_blank');
  }

  openPolis(){
    window.open('https://e-economy.biz/politika-privatnosti/', '_blank');
  }

  openLogin() {
    this.router.navigate(['login']);
  }
}
