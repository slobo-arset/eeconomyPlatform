import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ulazne-fakture-single',
  templateUrl: './ulazne-fakture-single.component.html',
  styleUrl: './ulazne-fakture-single.component.scss'
})
export class UlazneFaktureSingleComponent {

  items: MenuItem[] = [{ label: 'Ulazna faktura', routerLink: '/e-fakture/ulazne/' },{ label: 'Detalji' }];
  value: any;

  cities: any[];
  stv$: Observable<any>

    selectedCity: any;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}
