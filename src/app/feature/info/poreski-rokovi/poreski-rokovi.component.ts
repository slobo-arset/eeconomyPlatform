import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable, switchMap, tap } from 'rxjs';
import { InfoService } from 'src/app/data-access/info/info.service';
import { MainStateService } from 'src/app/data-access/state/main-state.service';

@Component({
  selector: 'app-poreski-rokovi',
  templateUrl: './poreski-rokovi.component.html',
  styleUrl: './poreski-rokovi.component.scss'
})
export class PoreskiRokoviComponent {
  firstDate: Date;
  items: MenuItem[] = [{ label: 'e-Rokovi (Poreski rokovi)' }];

  months: { label: string, value: string }[] = [];

  selectedMonth: string | null = null;

  info$: Observable<any>;

  user: any;

  visible: boolean = false;
  tema: string;
  zakonski_osnov: string;
  misljenje_ministarstva: string;

  mode: number = 1;

  updateId = 0;

  selectedObaveza: any;
  selectedObavezaPretraga: any;


  pisarnica: boolean = false;
  portal: boolean = false;

  obaveza$: Observable<any>;

  params: any = {}

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

    this.obaveza$ = this.infoService.getAllVrstaPoreskePrijave();

    this.info$ = this.infoService.getAllErokovi(this.selectedMonth, 2, this.params)
    this.user  =  this.mainStateService.getStateBykey('user');


  }


  create(){

    this.setParams();

    const data = {
      opis_obaveze: this.tema,
      zakonski_osnov: this.zakonski_osnov,
      vrsta_poreske_prijave_id: this.selectedObaveza,
      datum_vazenja: this.firstDate,
      mesec: (this.firstDate.getMonth() + 1).toString().padStart(2, '0'),
      godina: this.firstDate.getFullYear(),
      is_active: 1,
      portal: this.portal ? 1 : 0,
      pisarnica:  this.pisarnica ? 1 : 0,
      tip: 2
    }

    this.info$ =  this.infoService.createErokovi(data).pipe(
      switchMap(()=>{
        return this.infoService.getAllErokovi(this.selectedMonth, 2, this.params);
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
    this.setParams();

    this.info$ =  this.infoService.deleteErokovi(id).pipe(
      switchMap(()=>{
        return this.infoService.getAllErokovi(this.selectedMonth, 2, this.params);
      }),
      tap(()=>{
       this.visible = false;
      })
    )
  }


  editData(data: any){

    this.tema = data.opis_obaveze;
    this.zakonski_osnov = data.zakonski_osnov
    this.selectedObaveza = data.vrsta_poreske_prijave_id
    this.firstDate = new Date(data.datum_vazenja);
    this.portal =  data.portal = 1 ? true : false;
    this.pisarnica = data.pisarnica = 1 ? true : false;
    this.updateId = data.id;
    this.mode = 2;
    this.visible = true;


  }


  updateData(){
    this.setParams();

    const data = {
      opis_obaveze: this.tema,
      zakonski_osnov: this.zakonski_osnov,
      vrsta_poreske_prijave_id: this.selectedObaveza,
      datum_vazenja: this.firstDate,
      mesec: (this.firstDate.getMonth() + 1).toString().padStart(2, '0'),
      godina: this.firstDate.getFullYear(),
      is_active: 1,
      portal: this.portal ? 1 : 0,
      pisarnica:  this.pisarnica ? 1 : 0,
      tip: 2
    }

    this.info$ =  this.infoService.updateErokovi(this.updateId, data).pipe(
      switchMap(()=>{
        return this.infoService.getAllErokovi(this.selectedMonth, 2, this.params);
      }),
      tap(()=>{
       this.visible = false;
      })
    )

  }

  clear(){
    this.tema = '';
    this.zakonski_osnov = '';
    this.misljenje_ministarstva = '';
    this.firstDate = new Date();
    this.updateId = 0
  }


  pretraga(){
    this.setParams();
    this.info$ = this.infoService.getAllErokovi(this.selectedMonth, 2, this.params)
  }

  setParams(){
    console.log('pretraga',this.selectedObavezaPretraga)
    if(this.selectedObavezaPretraga){
      this.params = {
        obaveza: this.selectedObavezaPretraga
      }
    } else {
      this.params = {}
    }
  }
}
