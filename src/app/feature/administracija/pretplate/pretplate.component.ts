import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Observable, switchMap, tap } from 'rxjs';
import { SubscriptionService } from 'src/app/data-access/subscription/subscription.service';

@Component({
  selector: 'app-pretplate',
  templateUrl: './pretplate.component.html',
  styleUrls: ['./pretplate.component.scss'],
  providers: [MessageService]
})
export class PretplateComponent implements OnInit {

  subscription$: Observable<any>
  displayDialog: boolean = false;
  name: string = '';
  price: string = '';
  code: string = '';
  selectedId: string = '';

  items: MenuItem[] = [{ label: 'Pretplate' }];

  constructor(
    private subscriptionService: SubscriptionService,
    private messageService: MessageService,
  ){}

  ngOnInit(): void {
    this.subscription$ = this.subscriptionService.getAll()
  }

  showDialog(data: any){
    this.displayDialog = true;
    this.name = data.name;
    this.code = data.code;
    this.price = data.price;
    this.selectedId = data.id;
  }

  cancel(){
    this.displayDialog = false;
    //this.cdr.detectChanges();
  }

  saveData(){

    const data = {
      name:  this.name,
      price: this.price
    }

    this.subscription$ = this.subscriptionService.update(this.selectedId, data).pipe(
      switchMap(()=>{
        return this.subscriptionService.getAll().pipe(tap(()=>{
          this.displayDialog = false;
          this.messageService.add({ severity: 'success', summary: 'Uspešno ažuriranje', detail: 'Podaci su uspešno ažurirani' });
        }))
      }
    )
  )
  }

}
