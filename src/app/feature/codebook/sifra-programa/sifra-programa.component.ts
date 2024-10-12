import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Observable, tap } from 'rxjs';
import { SifraProgramaService } from 'src/app/data-access/codebook/sifra-programa.service';
import { MainStateService } from 'src/app/data-access/state/main-state.service';
import { SifraProgramaModalComponent } from './sifra-programa-modal/sifra-programa-modal.component';

@Component({
  selector: 'app-sifra-programa',
  templateUrl: './sifra-programa.component.html',
  styleUrl: './sifra-programa.component.scss',
  providers: [DialogService]
})
export class SifraProgramaComponent {
  ref: DynamicDialogRef | undefined;

  dokument$: Observable<any[]>;
  userData: any;
  loading: boolean = true;

  items: MenuItem[] = [{ label: 'Šifra programa' }];
  contextData: any;
  context: MenuItem[] =  [
    {label: 'Pregled', icon: 'pi pi-fw pi-eye', command: () => this.goToDokument(this.contextData.id)},
    {label: 'Obriši', icon: 'pi pi-fw pi-trash', command: () => this.deleteDokument(this.contextData.id)}
  ];


  constructor(
    private router: Router,
    public dialogService: DialogService,
    public sifraProgramaService: SifraProgramaService,
    public mainStateService: MainStateService,
) {}

  ngOnInit() {
    this.userData  =  this.mainStateService.getStateBykey('user');
    this.dokument$ = this.sifraProgramaService.getAll(this.userData.company_id).pipe(tap((_)=> this.loading = false));
  }

  clear(table: Table) {
      table.clear();
  }


  goToDokument(id:number){
   this.ref = this.dialogService.open(SifraProgramaModalComponent, { header: 'Izmeni šifru programa', width: '600px', data: { mode:'edit', id:id }});

    this.ref.onClose.subscribe((result: any) => {
      console.log('Dialog closed with result:', result);
      if(result!== undefined) {
        this.loading = true;
        this.dokument$ = this.sifraProgramaService.getAll(this.userData.company_id).pipe(tap((_)=> this.loading = false))
      }
    });
  }


  createDokument(){
    this.ref = this.dialogService.open(SifraProgramaModalComponent, { header: 'Kreiraj šifru programa', width: '600px', data: { mode:'create' }});
    this.ref.onClose.subscribe((result: any) => {
      console.log('Dialog closed with result:', result);
      if(result!== undefined) {
        this.dokument$ = this.sifraProgramaService.getAll(this.userData.company_id).pipe(tap((_)=> this.loading = false))
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
