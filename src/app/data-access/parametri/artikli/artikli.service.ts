import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artikal } from './artikli';

@Injectable({
  providedIn: 'root'
})
export class ArtikliService {

  constructor() { }

  artikli: Observable<Artikal[]> = of([
    {
      sifra_artikla: '1141414ACC',
      grupa_artikla_naziv: 'Televizori',
      naziv: 'Samsung CLS 51',
      serijski_broj: '411515511515',
      bar_kod: '1154544541',
      mc: 180.00,
      marza: 15,
      vpc: 250.55,
      cijena: 195.64,
      fiskalni_broj: '1141414ACC',
      min_kolicina: 10,
      jedinica_mjere_naziv: 'Komad',
      ruc: 10,
      n: true,
      p: false,
      w: false

    },
    {
      sifra_artikla: '11555SS',
      grupa_artikla_naziv: 'Graficke kartice',
      naziv: 'Nvidia GTX4090',
      serijski_broj: '15415548484',
      bar_kod: '95454545454',
      mc: 1800.00,
      marza: 15,
      vpc: 2500.55,
      cijena: 1950.64,
      fiskalni_broj: '11555SS',
      min_kolicina: 1,
      jedinica_mjere_naziv: 'Komad',
      ruc: 900,
      n: false,
      p: false,
      w: false
    },
    {
      sifra_artikla: 'AS444444',
      grupa_artikla_naziv: 'Toneri',
      naziv: 'Toner 83A',
      serijski_broj: '1511988',
      bar_kod: '7844477',
      mc: 75.00,
      marza: 8,
      vpc: 90.55,
      cijena: 80.64,
      fiskalni_broj: 'AS444444',
      min_kolicina: 1,
      jedinica_mjere_naziv: 'Komad',
      ruc: 6,
      n: false,
      p: false,
      w: true
    },

  ])

  getAllArtikle():Observable<Artikal[]>{
    return this.artikli
  }
}
