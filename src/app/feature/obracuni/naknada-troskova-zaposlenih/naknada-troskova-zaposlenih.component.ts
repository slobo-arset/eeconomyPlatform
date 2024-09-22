import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-naknada-troskova-zaposlenih',
  templateUrl: './naknada-troskova-zaposlenih.component.html',
  styleUrl: './naknada-troskova-zaposlenih.component.scss'
})
export class NaknadaTroskovaZaposlenihComponent implements OnInit {

  items: MenuItem[] = [{ label: 'Naknada troškova zaposlenom' }];

  constructor(){}

  ngOnInit(): void {
  }

}
