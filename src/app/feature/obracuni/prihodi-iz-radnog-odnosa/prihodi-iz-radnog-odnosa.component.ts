import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-prihodi-iz-radnog-odnosa',
  templateUrl: './prihodi-iz-radnog-odnosa.component.html',
  styleUrl: './prihodi-iz-radnog-odnosa.component.scss'
})
export class PrihodiIzRadnogOdnosaComponent implements OnInit {

  items: MenuItem[] = [{ label: 'Zaposleni' }];

  constructor(){}

  ngOnInit(): void {
  }

}
