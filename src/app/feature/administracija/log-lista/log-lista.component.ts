import { LogService } from './../../../data-access/log/log.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyService } from 'src/app/data-access/user/company/company.service';

@Component({
  selector: 'app-log-lista',
  templateUrl: './log-lista.component.html',
  styleUrls: ['./log-lista.component.scss']
})
export class LogListaComponent implements OnInit{
  logLista$: Observable<any>
  subscription$: Observable<any>

  constructor(private logService: LogService, private companyService: CompanyService){

  }
  ngOnInit(): void {
    this.logLista$ = this.logService.getAll();
  }



}
