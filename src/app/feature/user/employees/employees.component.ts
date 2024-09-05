import { CompanyService } from 'src/app/data-access/user/company/company.service';
import { Observable, switchMap, tap } from 'rxjs';
import { EmployeesService } from './../../../data-access/user/employees/employees.service';
import { Component, OnInit } from '@angular/core';
import { MainStateService } from 'src/app/data-access/state/main-state.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  user$: Observable<any>;
  items: MenuItem[] = [{ label: 'Zaposleni' }];
  displayDialog: boolean = false;
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  userData: any;
  userID: string = '';
  numberLicence = 0
  numberOfRows = 0

  constructor(
    private employeesService: EmployeesService,
    public mainStateService: MainStateService,
    public companyService: CompanyService
  ){}

  ngOnInit(): void {
    this.userData  =  this.mainStateService.getStateBykey('user');
    console.log('dataaat', this.userData)
    this.user$ = this.employeesService.getUser(this.userData?.company_id).pipe(
      tap(users => {
        this.numberOfRows = users.length;
      })
    )
    this.companyService.getById(this.userData?.company_id).subscribe((data)=>{
      this.numberLicence = data.max_licence
    })
  }


  create(){
    this.clear();
    this.userID = '';
    this.displayDialog = true;
  }

  edit(data: any){
    this.displayDialog = true;
    this.userID = data.id;
    this.firstName = data.name;
    this.lastName = data.lastname;
  }


  cancel(){
    this.displayDialog = false;
    this.clear();
  }

  save(){
    if(this.userID){
      const data = {
        "name": this.firstName,
        "lastname": this.lastName
      }

      this.user$ = this.employeesService.update(this.userID, data).pipe(
        switchMap(()=>{
          return this.employeesService.getUser(this.userData?.company_id);
        })
      )
      this.displayDialog = false;
    } else {
      const data = {
        "name": this.firstName,
        "lastname": this.lastName,
        "email": this.email,
        "password": this.password,
        "tip": this.userData?.tip,
        "is_active": 1,
        "company_id": this.userData?.company_id
      }

      this.user$ = this.employeesService.create(data).pipe(
        switchMap(()=>{
          return this.employeesService.getUser(this.userData?.company_id);
        })
      )
      this.displayDialog = false;
      this.clear();
    }

  }

  clear(){
    this.firstName = '';
    this.lastName = '';
    this.email = ''
  }

}
