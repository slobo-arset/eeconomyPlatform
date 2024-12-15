import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable, switchMap, tap } from 'rxjs';
import { InfoService } from 'src/app/data-access/info/info.service';
import { MainStateService } from 'src/app/data-access/state/main-state.service';

@Component({
  selector: 'app-informator',
  templateUrl: './informator.component.html',
  styleUrl: './informator.component.scss'
})
export class InformatorComponent implements OnInit {
  firstDate: Date;
  items: MenuItem[] = [{ label: 'e-Informator' }];

  months: { label: string, value: string }[] = [];

  selectedMonth: string | null = null;

  info$: Observable<any>;

  user: any;

  visible: boolean = false;
  tema: string;
  strucni_komentar: string;
  misljenje_ministarstva: string;

  mode: number = 1;

  updateId = 0;

  constructor(
    public mainStateService: MainStateService,
    private infoService: InfoService
  ){
    const now = new Date();
    this.firstDate = new Date(now.setDate(now.getDate() - 1));

    this.months = [
      { label: 'Januar', value: '1' },
      { label: 'Februar', value: '2' },
      { label: 'Mart', value: '3' },
      { label: 'April', value: '4' },
      { label: 'Maj', value: '5' },
      { label: 'Jun', value: '6' },
      { label: 'Jul', value: '7' },
      { label: 'Avgust', value: '8' },
      { label: 'Septembar', value: '9' },
      { label: 'Oktobar', value: '10' },
      { label: 'Novembar', value: '11' },
      { label: 'Decembar', value: '12' },
    ];

  }
  ngOnInit(): void {
    const currentMonth = new Date().getMonth() + 1;
    this.selectedMonth = currentMonth.toString();

    this.info$ = this.infoService.getAllEInformator(this.selectedMonth)
    this.user  =  this.mainStateService.getStateBykey('user');


  }


  create(){
    const data = {
      tema_sluzbeni_glasnik: this.tema,
      strucni_komentar: this.strucni_komentar,
      misljenje_ministarstva: this.misljenje_ministarstva,
      datum: this.firstDate,
      mesec: (this.firstDate.getMonth() + 1).toString().padStart(2, '0'),
      godina: this.firstDate.getFullYear(),
      is_active: 1
    }

    this.info$ =  this.infoService.createEInformator(data).pipe(
      switchMap(()=>{
        return this.infoService.getAllEInformator(this.selectedMonth);
      }),
      tap(()=>{
       this.visible = false;
      })
    )

  }

  showData(){
    this.clear();
    this.visible = true;
  }

  deleteData(id: string){
    this.info$ =  this.infoService.deleteEInformator(id).pipe(
      switchMap(()=>{
        return this.infoService.getAllEInformator(this.selectedMonth);
      }),
      tap(()=>{
       this.visible = false;
      })
    )
  }


  editData(data: any){

    this.tema = data.tema_sluzbeni_glasnik;
    this.strucni_komentar = data.strucni_komentar;
    this.misljenje_ministarstva = data.misljenje_ministarstva;
    this.firstDate = new Date(data.datum);
    this.updateId = data.id;
    this.mode = 2;
    this.visible = true;


  }



  updateData(){
    const data = {
      tema_sluzbeni_glasnik: this.tema,
      strucni_komentar: this.strucni_komentar,
      misljenje_ministarstva: this.misljenje_ministarstva,
      datum: this.firstDate,
      mesec: (this.firstDate.getMonth() + 1).toString().padStart(2, '0'),
      godina: this.firstDate.getFullYear(),
      is_active: 1
    }

    this.info$ =  this.infoService.updateEInformator(this.updateId, data).pipe(
      switchMap(()=>{
        return this.infoService.getAllEInformator(this.selectedMonth);
      }),
      tap(()=>{
       this.visible = false;
      })
    )

  }

  clear(){
    this.tema = '';
    this.strucni_komentar = '';
    this.misljenje_ministarstva = '';
    this.firstDate = new Date();
    this.updateId = 0
  }


  pretraga(){
    this.info$ = this.infoService.getAllEInformator(this.selectedMonth)
  }

}
