import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Banka } from 'src/app/data-access/parametri/banke/banka';


@Injectable({
  providedIn: 'root'
})
export class BankeService {

  banke: Observable<Banka[]> = of([
    {id: 1, naziv: 'Komercijalna', broj_racuna: '850-111-25'},
    {id: 2, naziv: 'NLB Banka', broj_racuna: '860-00000111-25'},
    {id: 3, naziv: 'Unicredit Bank', broj_racuna: '870-51144111-25'},
    {id: 4, naziv: 'Sberbank', broj_racuna: '880-00005550111-25'},
  ])


  getAllBanke():Observable<Banka[]>{
    return this.banke
  }
}
