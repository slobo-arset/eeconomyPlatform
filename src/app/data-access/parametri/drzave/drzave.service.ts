import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Drzava} from "./drzava";


@Injectable({
  providedIn: 'root'
})
export class DrzaveService {

  drzave: Observable<Drzava[]> = of([
    {id: 1, naziv: 'BIH', maticnaDrzava: true},
    {id: 1, naziv: 'Srbija', maticnaDrzava: false},
    {id: 1, naziv: 'Hrvatska', maticnaDrzava: false},
    {id: 1, naziv: 'Crna Gora', maticnaDrzava: false},
  ]);

  constructor() { }

  getAllDrzave(): Observable<Drzava[]>{
    return this.drzave;
  }
}
