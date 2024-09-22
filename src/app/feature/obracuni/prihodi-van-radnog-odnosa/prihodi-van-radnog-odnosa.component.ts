import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-prihodi-van-radnog-odnosa',
  templateUrl: './prihodi-van-radnog-odnosa.component.html',
  styleUrl: './prihodi-van-radnog-odnosa.component.scss'
})
export class PrihodiVanRadnogOdnosaComponent implements OnInit {

  items: MenuItem[] = [{ label: 'Zaposleni' }];

  constructor(){}

  ngOnInit(): void {
  }

}
