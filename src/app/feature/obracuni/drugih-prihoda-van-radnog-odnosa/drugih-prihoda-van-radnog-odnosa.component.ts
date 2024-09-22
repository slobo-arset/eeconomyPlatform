import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-drugih-prihoda-van-radnog-odnosa',
  templateUrl: './drugih-prihoda-van-radnog-odnosa.component.html',
  styleUrl: './drugih-prihoda-van-radnog-odnosa.component.scss'
})
export class DrugihPrihodaVanRadnogOdnosaComponent implements OnInit {

  items: MenuItem[] = [{ label: 'Obračun drugih prihoda van radnog odnosa' }];

  constructor(){}

  ngOnInit(): void {
  }
}
