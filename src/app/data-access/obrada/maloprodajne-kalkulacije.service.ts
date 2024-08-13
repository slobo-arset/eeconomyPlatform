import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {MpKalkulacijaList} from "./mpkalkulacija";

@Injectable({
  providedIn: 'root'
})
export class MaloprodajneKalkulacijeService {

  kalkulacije: Observable<MpKalkulacijaList[]> = of([
    {
      broj: '1',
      datum: '01.01.2023',
      rok_placanja: '25.01.2023',
      br_racuna: '15474',
      skladiste: 'UBB',
      dobavljac: 'Alti',
      iznos: 787.00,
      PL: false,
      Z: false,
      PR: false
    },
    {
      broj: '2',
      datum: '01.01.2023',
      rok_placanja: '25.01.2023',
      br_racuna: '14455',
      skladiste: 'UBB',
      dobavljac: 'Alti',
      iznos: 545.00,
      PL: true,
      Z: false,
      PR: false
    },
    {
      broj: '3',
      datum: '01.01.2023',
      rok_placanja: '25.01.2023',
      br_racuna: '5454',
      skladiste: 'UBB',
      dobavljac: 'Alti',
      iznos: 787.00,
      PL: false,
      Z: true,
      PR: false
    },
    {
      broj: '4',
      datum: '01.01.2023',
      rok_placanja: '25.01.2023',
      br_racuna: '15545474',
      skladiste: 'UBB',
      dobavljac: 'Alti',
      iznos: 54.00,
      PL: false,
      Z: false,
      PR: true
    },
    {
      broj: '5',
      datum: '01.01.2023',
      rok_placanja: '25.01.2023',
      br_racuna: '7777',
      skladiste: 'UBB',
      dobavljac: 'Alti',
      iznos: 1556.00,
      PL: false,
      Z: false,
      PR: true
    },
    {
      broj: '6',
      datum: '01.01.2023',
      rok_placanja: '25.01.2023',
      br_racuna: 'HHG1111',
      skladiste: 'UBB',
      dobavljac: 'Alti',
      iznos: 654.00,
      PL: true,
      Z: true,
      PR: true
    }
  ]);


  stavkeKalkulacije: Observable<any> = of([
    {
      id: '1',
      sifra: '1006',
      naziv: 'Caj',
      grupa: 'Promo',
      kolicina: 5,
      jmj: 'kom',
      ulaz: '15.00',
      rabat: '0.00',
      NBC: 1,
      NVB: '',
      marza: '',
      VPC: '4.000',
      pdv: '17',
      p: false,
      mc: false,
      vc: false,
      nc: false,
      np: false
    },
    {
      id: '2',
      sifra: '1007',
      naziv: 'Caj 2',
      grupa: 'Promo',
      kolicina: 5,
      jmj: 'kom',
      ulaz: '15.00',
      rabat: '0.00',
      NBC: 1,
      NVB: '',
      marza: '',
      VPC: '4.000',
      pdv: '17',
      p: false,
      mc: false,
      vc: false,
      nc: false,
      np: false
    },
    {
      id: '3',
      sifra: '1009',
      naziv: 'Caj 9',
      grupa: 'Promo',
      kolicina: 5,
      jmj: 'kom',
      ulaz: '15.00',
      rabat: '0.00',
      NBC: 1,
      NVB: '',
      marza: '',
      VPC: '4.000',
      pdv: '17',
      p: false,
      mc: false,
      vc: false,
      nc: false,
      np: false
    },
    {
      id: '4',
      sifra: '100655',
      naziv: 'Sok',
      grupa: 'Neka kategorija',
      kolicina: 5,
      jmj: 'kom',
      ulaz: '15.00',
      rabat: '0.00',
      NBC: 1,
      NVB: '',
      marza: '',
      VPC: '4.000',
      pdv: '17',
      p: false,
      mc: true,
      vc: false,
      nc: true,
      np: false
    },
    {
      id: '5',
      sifra: '51455',
      naziv: 'Voda',
      grupa: 'Promo',
      kolicina: 5,
      jmj: 'kom',
      ulaz: '15.00',
      rabat: '0.00',
      NBC: 1,
      NVB: '',
      marza: '',
      VPC: '4.000',
      pdv: '17',
      p: false,
      mc: false,
      vc: false,
      nc: false,
      np: false
    },
    {
      id: '6',
      sifra: '1546465',
      naziv: 'Caj',
      grupa: 'Promo',
      kolicina: 5,
      jmj: 'kom',
      ulaz: '15.00',
      rabat: '0.00',
      NBC: 1,
      NVB: '',
      marza: '',
      VPC: '4.000',
      pdv: '17',
      p: false,
      mc: false,
      vc: false,
      nc: false,
      np: false
    },
    {
      id: '7',
      sifra: '144545',
      naziv: 'Caj',
      grupa: 'Promo',
      kolicina: 5,
      jmj: 'kom',
      ulaz: '15.00',
      rabat: '0.00',
      NBC: 1,
      NVB: '',
      marza: '',
      VPC: '4.000',
      pdv: '17',
      p: false,
      mc: false,
      vc: false,
      nc: false,
      np: false
    },
    {
      id: '8',
      sifra: '44554',
      naziv: 'Caj',
      grupa: 'Promo',
      kolicina: 5,
      jmj: 'kom',
      ulaz: '15.00',
      rabat: '0.00',
      NBC: 1,
      NVB: '',
      marza: '',
      VPC: '4.000',
      pdv: '17',
      p: false,
      mc: false,
      vc: false,
      nc: false,
      np: false
    },
    {
      id: '9',
      sifra: '545454',
      naziv: 'Caj',
      grupa: 'Promo',
      kolicina: 5,
      jmj: 'kom',
      ulaz: '15.00',
      rabat: '0.00',
      NBC: 1,
      NVB: '',
      marza: '',
      VPC: '4.000',
      pdv: '17',
      p: false,
      mc: false,
      vc: false,
      nc: false,
      np: false
    }
  ]);

  zaglavljeKalkulacije: Observable<any> = of([]);

  constructor() {
  }

  getAllKalkulacije(): Observable<MpKalkulacijaList[]> {
    return this.kalkulacije
  }

  getStavkeKalkulacije(id: number): Observable<any> {
    return this.stavkeKalkulacije;
  }

  getZaglavljeKalkulacije(id: number): Observable<any> {
    return this.zaglavljeKalkulacije;
  }
}
