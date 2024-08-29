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

  constructor(
    private employeesService: EmployeesService,
    public mainStateService: MainStateService
  ){}

  ngOnInit(): void {
    const user  =  this.mainStateService.getStateBykey('user');
    console.log(user)
    this.user$ = this.employeesService.getUser(user?.company_id);
  }


  create(){
    this.displayDialog = true;
  }

  edit(data: any){
    this.displayDialog = true;

  }


  cnacel(){
    this.displayDialog = false;
  }

}
