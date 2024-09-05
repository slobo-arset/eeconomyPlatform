import { ChangeDetectorRef, Component } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MenuItem, MessageService } from 'primeng/api';
import { Observable, switchMap, tap } from 'rxjs';
import { CompanyService } from 'src/app/data-access/user/company/company.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class CompanyComponent {
  company$: Observable<any>
  date: any;
  isActive: any;
  displayDialog: boolean = false;
  displayDialogCompany: boolean = false;
  companyId = 0;
  items: MenuItem[] = [{ label: 'Korisnici' }];
  companyName: string;
  pib: string;
  jbkjs: string;
  numberLicence: string;
  contact_number: string;
  contact_person: string;
  city: string;
  address: string;

  constructor(
    private companyService: CompanyService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.company$ = this.companyService.getAll()
  }

  showDialog(data: any){
    this.displayDialog = true;
    this.isActive = data.is_active == 1 ? true : false;
    this.date = data.subscription_end ? new Date(data.subscription_end) :  null;
    this.companyId = data.id;
  }


  showDialogEdit(data: any){

    this.companyName = data.company_name;
    this.pib = data.pib;
    this.jbkjs = data.jbkjs;
    this.contact_person = data.contact_person;
    this.city = data.city;
    this.address = data.address;
    this.contact_number = data.contact_number;
    this.numberLicence = data.max_licence;
    this.companyId = data.id;

    this.displayDialogCompany = true;
  }


  confirmDelete() {
    this.confirmationService.confirm({
        message: 'Da li ste sigurni da želite da obrišete korisnika?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        }
    });
  }

  cnacel(){
    this.displayDialog = false;
    //this.cdr.detectChanges();
  }


  saveData(){

    const data = {
      is_active:  this.isActive,
      subscription_end: this.date
    }

    this.company$ = this.companyService.updateStatus(this.companyId, data).pipe(
      switchMap(()=>{
        return this.companyService.getAll();
      }),
      tap(()=>{
        this.displayDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Uspešno ažuriranje', detail: 'Podaci su uspešno ažurirani' });
      })
    )
  }

  saveCompanyData(){
    const data = {
      "company_name": this.companyName,
      "pib": this.pib,
      "jbkjs": this.jbkjs,
      "contact_person": this.contact_person,
      "city": this.city,
      "address": this.address,
      "contact_number": this.contact_number,
      "max_licence": this.numberLicence
  }


    this.company$ = this.companyService.update(this.companyId, data).pipe(
      switchMap(()=>{
        return this.companyService.getAll();
      }),
      tap(()=>{
        this.displayDialogCompany = false;
        this.messageService.add({ severity: 'success', summary: 'Uspešno ažuriranje', detail: 'Podaci su uspešno ažurirani' });
      })
    )
  }
}
