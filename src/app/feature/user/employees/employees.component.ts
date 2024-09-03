import { Observable } from 'rxjs';
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

  constructor(
    private employeesService: EmployeesService,
    public mainStateService: MainStateService
  ){}

  ngOnInit(): void {
    this.userData  =  this.mainStateService.getStateBykey('user');
    console.log('dataaat', this.userData)
    this.user$ = this.employeesService.getUser(this.userData?.company_id);
  }


  create(){
    this.userID = '';
    this.displayDialog = true;
  }

  edit(data: any){
    this.displayDialog = true;
    this.userID = data.id

  }


  cancel(){
    this.displayDialog = false;
  }

  save(){
    if(this.userID){
      const data = {
        "name": this.firstName,
        "lastname": this.lastName
      }
      console.log('edit',data)
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
      console.log('create',data)
    }



  }

}
