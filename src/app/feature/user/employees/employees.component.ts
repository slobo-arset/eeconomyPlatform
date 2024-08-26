import { Observable } from 'rxjs';
import { EmployeesService } from './../../../data-access/user/employees/employees.service';
import { Component, OnInit } from '@angular/core';
import { MainStateService } from 'src/app/data-access/state/main-state.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  user$: Observable<any>;

  constructor(
    private employeesService: EmployeesService,
    public mainStateService: MainStateService
  ){}

  ngOnInit(): void {
    const user  =  this.mainStateService.getStateBykey('user');
    console.log(user)
    this.user$ = this.employeesService.getUser(user?.company_id);
  }

}
