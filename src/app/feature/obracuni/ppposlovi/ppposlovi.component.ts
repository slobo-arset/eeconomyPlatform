import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-ppposlovi',
  templateUrl: './ppposlovi.component.html',
  styleUrl: './ppposlovi.component.scss'
})
export class PpposloviComponent implements OnInit {

  items: MenuItem[] = [{ label: 'Ugovorene naknade za PP poslove' }];

  constructor(){}

  ngOnInit(): void {
  }

}
