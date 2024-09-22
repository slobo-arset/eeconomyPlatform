import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-naknada-nezaposleni',
  templateUrl: './naknada-nezaposleni.component.html',
  styleUrl: './naknada-nezaposleni.component.scss'
})
export class NaknadaNezaposleniComponent implements OnInit {

  items: MenuItem[] = [{ label: 'Naknada licima koja nisu zaposlena' }];

  constructor(){}

  ngOnInit(): void {
  }

}
