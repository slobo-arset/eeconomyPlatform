import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyService } from 'src/app/data-access/user/company/company.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  subscription$: Observable<any>
  date: any;
  isActive: any;
  displayDialog: boolean = false;

  constructor(private companyService: CompanyService){}

  ngOnInit(): void {
    this.subscription$ = this.companyService.getAll()
  }

  showDialog(data: any){
    this.displayDialog = true;
  }
}