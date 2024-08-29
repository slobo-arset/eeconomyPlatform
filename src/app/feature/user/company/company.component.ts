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
  companyId = 0;
  items: MenuItem[] = [{ label: 'Korisnici' }];

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

    console.log(data)
    this.displayDialog = true;
    this.isActive = data.is_active == 1 ? true : false;
    this.date = data.subscription_end ? new Date(data.subscription_end) :  null;
    this.companyId = data.id;
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

    this.company$ = this.companyService.update(this.companyId, data).pipe(
      switchMap(()=>{
        return this.companyService.getAll();
      }),
      tap(()=>{
        this.displayDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Uspešno ažuriranje', detail: 'Podaci su uspešno ažurirani' });
      })
    )
  }
}
