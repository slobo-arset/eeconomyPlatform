import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-obracun-drugih-prihoda',
  templateUrl: './obracun-drugih-prihoda.component.html',
  styleUrl: './obracun-drugih-prihoda.component.scss'
})
export class ObracunDrugihPrihodaComponent implements OnInit {

  items: MenuItem[] = [{ label: 'Zaposleni' }];

  constructor(){}

  ngOnInit(): void {
  }

}
