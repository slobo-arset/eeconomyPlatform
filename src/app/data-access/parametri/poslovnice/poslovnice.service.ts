import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Poslovnica } from './poslovnica';

@Injectable({
  providedIn: 'root'
})
export class PoslovniceService {

  poslovnice: Observable<Poslovnica[]> = of([
    {id: 1, sifra: 'POS1', naziv: 'Poslovnica 1'},
    {id: 2, sifra: 'POS2', naziv: 'Poslovnica 2'},
  ])


  getAllPoslovnice():Observable<Poslovnica[]>{
    return this.poslovnice
  }
}
