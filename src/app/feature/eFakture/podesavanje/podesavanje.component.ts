import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { Observable, tap } from 'rxjs';
import { MainStateService } from 'src/app/data-access/state/main-state.service';
import { CompanyService } from 'src/app/data-access/user/company/company.service';

@Component({
  selector: 'app-podesavanje',
  templateUrl: './podesavanje.component.html',
  styleUrl: './podesavanje.component.scss'
})
export class PodesavanjeComponent {
  items: MenuItem[] = [{ label: 'Profil kompanije' }];

  form: FormGroup;

  company$: Observable<any>;
  userData: any;

  constructor(
    private fb: FormBuilder,
    // private nutraStateService: NutraStateService,
    // private userService:UserService
    private companyService: CompanyService,
    private mainStateService: MainStateService,
  ) {
    this.userData = this.mainStateService.getStateBykey('user');

    console.log(this.userData)
  }

  ngOnInit(): void {

      this.company$ = this.companyService.getById(this.userData.company_id).pipe(
            tap((data)=>{
              this.form.patchValue(data);
          })
      );
      this.form = this.fb.group({
          company_name: [''],
          subscription_end: [''],

          api_key: [''],
          pib: [''],
          mb: [''],
          jbkjs: [''],
          contact_person: [''],
          city : [''],
          address: [''],
      });

      // this.user$ = this.nutraStateService.getObservableState().pipe(
      //     take(1),
      //     switchMap((state:any)=>{
      //         console.log(state)
      //         this.userId = state.user.id;
      //         return  this.userService.getUserInfoById(this.userId)
      //     }),
      //     tap((data)=>{
      //         this.companyType = data.company_type_id;
      //         this.form.patchValue(data);
      //         console.log(this.form.value)
      //     })
      // )


  }

  onSubmit() {
      console.log(this.form.value)

      const data = {
        api_key: this.form.get('api_key').value
      }

      if (this.form.valid) {

          this.companyService.updateData(this.userData.company_id, data).subscribe()
      } else {

      }
  }
}
