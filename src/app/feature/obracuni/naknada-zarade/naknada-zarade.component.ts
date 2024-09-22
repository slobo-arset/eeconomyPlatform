import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-naknada-zarade',
  templateUrl: './naknada-zarade.component.html',
  styleUrl: './naknada-zarade.component.scss'
})
export class NaknadaZaradeComponent implements OnInit {

  items: MenuItem[] = [{ label: 'Zaposleni' }];

  constructor(){}

  ngOnInit(): void {
  }

}
