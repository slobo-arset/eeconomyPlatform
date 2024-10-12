import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Observable, tap } from 'rxjs';
import { PodizvorFinansiranjaService } from 'src/app/data-access/codebook/podizvor-finansiranja.service';
import { MainStateService } from 'src/app/data-access/state/main-state.service';
import { PodizvorFinansiranjaModalComponent } from './podizvor-finansiranja-modal/podizvor-finansiranja-modal.component';

@Component({
  selector: 'app-podizvor-finansiranja',
  templateUrl: './podizvor-finansiranja.component.html',
  styleUrl: './podizvor-finansiranja.component.scss',
  providers: [DialogService]
})
export class PodizvorFinansiranjaComponent {
  ref: DynamicDialogRef | undefined;

  dokument$: Observable<any[]>;
  userData: any;
  podizvor_finansiranja: any;
  loading: boolean = true;

  items: MenuItem[] = [
    { label: 'Izvor finansiranja', routerLink: '/šifarnici/izvor-finansiranja' },
    { label: 'Podizvor finansiranja' }
  ];
  contextData: any;
  context: MenuItem[] =  [
    {label: 'Pregled', icon: 'pi pi-fw pi-eye', command: () => this.goToDokument(this.contextData.id)},
    {label: 'Obriši', icon: 'pi pi-fw pi-trash', command: () => this.deleteDokument(this.contextData.id)}
  ];


  constructor(
    private router: Router,
    public dialogService: DialogService,
    public podizvorFinansiranjaService: PodizvorFinansiranjaService,
    public mainStateService: MainStateService,
) {}

  ngOnInit() {
    this.userData  =  this.mainStateService.getStateBykey('user');
    this.podizvor_finansiranja  =  this.mainStateService.getStateBykey('podizvor_finansiranja');

    this.dokument$ = this.podizvorFinansiranjaService.getAll(this.userData.company_id, this.podizvor_finansiranja).pipe(tap((_)=> this.loading = false));
  }

  clear(table: Table) {
      table.clear();
  }


  goToDokument(id:number){
   this.ref = this.dialogService.open(PodizvorFinansiranjaModalComponent, { header: 'Izmeni podizvor finansiranja', width: '600px',data: { mode:'edit', id:id }});

    this.ref.onClose.subscribe((result: any) => {
      if(result!== undefined) {
        this.loading = true;
        this.dokument$ = this.podizvorFinansiranjaService.getAll(this.userData.company_id, this.podizvor_finansiranja).pipe(tap((_)=> this.loading = false))
      }
    });
  }


  createDokument(){
    this.ref = this.dialogService.open(PodizvorFinansiranjaModalComponent, { header: 'Kreiraj podizvor finansiranja', width: '600px',  data: { mode:'create' }});
    this.ref.onClose.subscribe((result: any) => {
      if(result!== undefined) {
        this.dokument$ = this.podizvorFinansiranjaService.getAll(this.userData.company_id, this.podizvor_finansiranja).pipe(tap((_)=> this.loading = false))
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
