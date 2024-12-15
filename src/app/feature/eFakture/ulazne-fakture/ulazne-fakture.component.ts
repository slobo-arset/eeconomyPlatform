import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { bufferCount, concatMap, delay, forkJoin, from, map, mergeMap, Observable, tap } from 'rxjs';
import { EfaktureService } from 'src/app/data-access/eFakture/efakture.service';

@Component({
  selector: 'app-ulazne-fakture',
  templateUrl: './ulazne-fakture.component.html',
  styleUrl: './ulazne-fakture.component.scss'
})
export class UlazneFaktureComponent {
  firstDate: Date;
  secondDate: Date;
  orders: any;
  items: MenuItem[] = [{ label: 'KPR' }];
  showLoader: boolean = false;

  invoice$: Observable<any>

  constructor(
    private eFaktureService: EfaktureService
  ) {
    const now = new Date();
    this.firstDate = new Date(now.setDate(now.getDate() - 15));
    this.secondDate = new Date(new Date().setDate(new Date().getDate() - 1));
    this.fetchInvoices()
  }


  convertToISODate(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }


  fetchInvoices() {
    if (!this.firstDate || !this.secondDate) {
      alert('Please provide both dates.');
      return;
    }


    const formattedDateFrom = this.convertToISODate(this.firstDate.toString());
    const formattedDateTo = this.convertToISODate(this.secondDate.toString());


    this.invoice$ = this.eFaktureService.getInvoices(formattedDateFrom, formattedDateTo, 'd9c941ea-260c-4d57-a1b2-14cde7c625a1')
  }



  sinhro(){
    this.showLoader = true;
    const formattedDateFrom = this.convertToISODate(this.firstDate.toString());
    const formattedDateTo = this.convertToISODate(this.secondDate.toString());

    this.invoice$ = this.eFaktureService.getInvoices(formattedDateFrom, formattedDateTo, 'd9c941ea-260c-4d57-a1b2-14cde7c625a1').pipe(
      map((invoices) => invoices.filter((invoice) => invoice.status === 99)), // Filter invoices with status 99
      tap((filteredInvoices) => console.log('Filtered invoices:', filteredInvoices)), // Debug log
      mergeMap((filteredInvoices) =>
        from(filteredInvoices).pipe(
          bufferCount(3), // Group invoices into batches of 3
          concatMap((batch) =>
            forkJoin(
              batch.map((invoice: any) =>
                this.eFaktureService.insertInvoice(invoice.purchase_invoice_id.toString(), { apiKey: 'd9c941ea-260c-4d57-a1b2-14cde7c625a1' })
              )
            ).pipe(
              delay(1000) // Wait 1 second after processing each batch
            )
          )
        )
      ),
      tap(() => {
        this.showLoader = false; // Hide loader when all requests are complete
      }),
      map(() => 'All invoices processed successfully.') // Return a success message
    );
  }

}
