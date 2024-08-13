import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Porez } from './porez';

@Injectable({
  providedIn: 'root'
})
export class PorezneStopeService {

  porez: Observable<Porez[]> = of([
    {id: 1, stopa: 17, naziv: 'PDV'},
    {id: 2, stopa: 0, naziv: 'PDV0'},
  ])


  getAllStope():Observable<Porez[]>{
    return this.porez
  }
}
