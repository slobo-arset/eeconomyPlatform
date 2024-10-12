import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Observable, tap } from 'rxjs';
import { EkonomskaPodklasifikacijaService } from 'src/app/data-access/codebook/ekonomska-podklasifikacija.service';
import { MainStateService } from 'src/app/data-access/state/main-state.service';
import { EkonomskaPodklasifikacijaModalComponent } from './ekonomska-podklasifikacija-modal/ekonomska-podklasifikacija-modal.component';

@Component({
  selector: 'app-ekonomska-podklasifikacija',
  templateUrl: './ekonomska-podklasifikacija.component.html',
  styleUrl: './ekonomska-podklasifikacija.component.scss',
  providers: [DialogService]
})
export class EkonomskaPodklasifikacijaComponent {
  ref: DynamicDialogRef | undefined;

  dokument$: Observable<any[]>;
  userData: any;
  loading: boolean = true;

  items: MenuItem[] = [
    { label: 'Ekonomska klasifikacija', routerLink : '/šifarnici/ekonomska-klasifikacija' },
    { label: 'Ekonomska podklasifikacija'}
  ];
  contextData: any;
  context: MenuItem[] =  [
    {label: 'Pregled', icon: 'pi pi-fw pi-eye', command: () => this.goToDokument(this.contextData.id)},
    {label: 'Obriši', icon: 'pi pi-fw pi-trash', command: () => this.deleteDokument(this.contextData.id)}
  ];

  ekonomska_podklasifikacija: any;


  constructor(
    private router: Router,
    public dialogService: DialogService,
    public ekonomskaPodklasifikacijaService: EkonomskaPodklasifikacijaService,
    public mainStateService: MainStateService,
) {}

  ngOnInit() {
    this.userData  =  this.mainStateService.getStateBykey('user');
    this.ekonomska_podklasifikacija  =  this.mainStateService.getStateBykey('ekonomska_podklasifikacija');
    this.dokument$ = this.ekonomskaPodklasifikacijaService.getAll(this.userData.company_id,  this.ekonomska_podklasifikacija).pipe(tap((_)=> this.loading = false));
  }

  clear(table: Table) {
      table.clear();
  }


  goToDokument(id:number){
   this.ref = this.dialogService.open(EkonomskaPodklasifikacijaModalComponent, { header: 'Izmena ekonomske podklasifikacije', width: '600px', data: { mode:'edit', id:id }});

    this.ref.onClose.subscribe((result: any) => {
      console.log('Dialog closed with result:', result);
      if(result!== undefined) {
        this.loading = true;
        this.dokument$ = this.ekonomskaPodklasifikacijaService.getAll(this.userData.company_id,  this.ekonomska_podklasifikacija).pipe(tap((_)=> this.loading = false))
      }
    });
  }


  createDokument(){
    this.ref = this.dialogService.open(EkonomskaPodklasifikacijaModalComponent, { header: 'Kreiranje ekonomske klasifikacije', width: '600px', data: { mode:'create' }});
    this.ref.onClose.subscribe((result: any) => {
      console.log('Dialog closed with result:', result);
      if(result!== undefined) {
        this.dokument$ = this.ekonomskaPodklasifikacijaService.getAll(this.userData.company_id, this.ekonomska_podklasifikacija).pipe(tap((_)=> this.loading = false))
      }
    });
  }

  deleteDokument(id:number) {
    // this.dokumentsService.delete(id).pipe(
    //   catchError((msg) => {
    //     console.log('Error delete Dokument: ', msg);
    //     return of([])
    //   }),
    //   tap((res:any)=> {
    //     if( res.message == 'Deleted successfully') {
    //       this.loading = true;
    //       this.dokument$ = this.dokumentsService.getAllDokuments().pipe(tap((_)=> this.loading = false))
    //     } else {
    //       console.log('err')
    //     }
    //   })
    // ).subscribe()
  }
}
