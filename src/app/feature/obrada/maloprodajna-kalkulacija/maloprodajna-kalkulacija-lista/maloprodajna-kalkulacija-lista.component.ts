import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {MpKalkulacijaList} from "../../../../data-access/obrada/mpkalkulacija";
import {MaloprodajneKalkulacijeService} from "../../../../data-access/obrada/maloprodajne-kalkulacije.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-maloprodajna-kalkulacija-lista',
  templateUrl: './maloprodajna-kalkulacija-lista.component.html',
  styleUrls: ['./maloprodajna-kalkulacija-lista.component.scss']
})
export class MaloprodajnaKalkulacijaListaComponent {
  addBlock: boolean = false;
  kalkulacije: Observable<MpKalkulacijaList[]> = of([])

  constructor(
    private mpKalkulacije: MaloprodajneKalkulacijeService,
    public router: Router
  ){}

  ngOnInit(): void {
    this.kalkulacije = this.mpKalkulacije.getAllKalkulacije();
  }

  onRowEditInit(id:number){}

  showAddBlock(){
    this.addBlock = true;
  }

  hiddenAddBlock(){
    this.addBlock = false;
  }

}
