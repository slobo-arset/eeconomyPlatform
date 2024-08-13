import { Component } from '@angular/core';
import {MaloprodajneKalkulacijeService} from "../../../data-access/obrada/maloprodajne-kalkulacije.service";

@Component({
  selector: 'app-maloprodajna-kalkulacija',
  templateUrl: './maloprodajna-kalkulacija.component.html',
  styleUrls: ['./maloprodajna-kalkulacija.component.scss']
})
export class MaloprodajnaKalkulacijaComponent {
  cars: any;

  virtualCars: any;

  cols!: any[];

  constructor(private mpKalkulacija: MaloprodajneKalkulacijeService) {}

  ngOnInit() {
    this.cols = [
      {field: 'id', header: 'Rbr', sort: false},
      {field: 'sifra', header: 'Šifra', sort: true},
      {field: 'naziv', header: 'Naziv', sort: true},
      {field: 'grupa', header: 'Grupa', sort: true},
      {field: 'kolicina', header: 'Količina', sort: true},
      {field: 'jmj', header: 'Jmj', sort: false},
      {field: 'ulaz', header: 'Ulazna cijena', sort: false},
      {field: 'rabat', header: 'Rabat %', sort: false},
      {field: 'NBC', header: 'NBC', sort: false},
      {field: 'NVB', header: 'NBV', sort: false},
      {field: 'marza', header: 'Marža %', sort: false},
      {field: 'VPC', header: 'VPC', sort: false},
      {field: 'pdv', header: 'PDV %', sort: false},
      {field: 'p', header: 'P', sort: false},
      {field: 'mc', header: 'Mc', sort: false},
      {field: 'vc', header: 'Vc', sort: false},
      {field: 'nc', header: 'Nc', sort: false},
      {field: 'np', header: 'Np', sort: false},
    ];

    this.cars = this.mpKalkulacija.getStavkeKalkulacije(10)

  }
}
