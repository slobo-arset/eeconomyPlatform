import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Napomena} from "./napomena";

@Injectable({
  providedIn: 'root'
})
export class NapomeneService {

  constructor() { }

  napomene: Observable<Napomena[]> = of([
    {id: 1, naziv: 'Napomena 1'},
    {id: 2, naziv: 'Napomena 2'},
    {id: 3, naziv: 'Napomena 3'},
    {id: 5, naziv: 'Napomena 4'},
    {id: 6, naziv: 'Napomena 5'},
    {id: 8, naziv: 'Napomena 6'}
    ]);

  getAllNapomene(): Observable<Napomena[]> {
    return this.napomene;
  }
}
