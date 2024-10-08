import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-ekonomska-klasifikacija',
  templateUrl: './ekonomska-klasifikacija.component.html',
  styleUrl: './ekonomska-klasifikacija.component.scss',
  providers: [DialogService]
})
export class EkonomskaKlasifikacijaComponent {
  ref: DynamicDialogRef | undefined;

  dokument$: Observable<any[]>;

  loading: boolean = true;

  items: MenuItem[] = [{ label: 'Dokumenta' }];
  contextData: any;
  context: MenuItem[] =  [
    {label: 'Pregled', icon: 'pi pi-fw pi-eye', command: () => this.goToDokument(this.contextData.id)},
    {label: 'Obriši', icon: 'pi pi-fw pi-trash', command: () => this.deleteDokument(this.contextData.id)}
  ];


  constructor(
    private router: Router,
    public dialogService: DialogService,
) {}

  ngOnInit() {
    // this.dokument$ = this.dokumentsService.getAllDokuments().pipe(tap((_)=> this.loading = false))

    // this.nutraStateService.getObservableState().pipe(
    //   take(1),
    // ).subscribe()
  }

  clear(table: Table) {
      table.clear();
  }


  goToDokument(id:number){
    // this.ref = this.dialogService.open(DokumentsModalComponent, { header: 'Pregled dokumenta', width: '600px', height: '300px', data: { mode:'edit', id:id }});

    // this.ref.onClose.subscribe((result: any) => {
    //   console.log('Dialog closed with result:', result);
    //   if(result!== undefined) {
    //     this.loading = true;
    //     this.dokument$ = this.dokumentsService.getAllDokuments().pipe(tap((_)=> this.loading = false))
    //   }
    // });
  }


  createDokument(){
    // this.ref = this.dialogService.open(DokumentsModalComponent, { header: 'Kreiranje dokumenta', width: '600px', height: '300px', data: { mode:'create' }});

    // this.ref.onClose.subscribe((result: any) => {
    //   console.log('Dialog closed with result:', result);
    //   if(result!== undefined) {
    //     this.loading = true;
    //     this.dokument$ = this.dokumentsService.getAllDokuments().pipe(tap((_)=> this.loading = false))
    //   }
    // });
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
