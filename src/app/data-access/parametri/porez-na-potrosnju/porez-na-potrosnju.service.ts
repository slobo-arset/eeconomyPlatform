import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {PorezNaPotosnju} from "./porez-na-potosnju";

@Injectable({
  providedIn: 'root'
})
export class PorezNaPotrosnjuService {

  porez: Observable<PorezNaPotosnju[]> = of([
    { id: 1, naziv: 'PNP', stopa: 3.00 }
  ])

  constructor() { }

  getAllPorezNaPotrosnju(): Observable<PorezNaPotosnju[]> {
    return this.porez;
  }

}
