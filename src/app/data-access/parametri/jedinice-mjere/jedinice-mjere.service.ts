import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JediniceMjere } from './jedinice-mjere';

@Injectable({
  providedIn: 'root'
})
export class JediniceMjereService {

  jedinice_mere: Observable<JediniceMjere[]> = of([
    {id: 1, naziv: 'Komad'},
    {id: 2, naziv: 'Kilogram'},
    {id: 3, naziv: 'Gram'},
    {id: 4, naziv: 'Paket'},
  ])

  getJediniceMere():Observable<JediniceMjere[]>{
    return this.jedinice_mere
  }


}
