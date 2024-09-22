import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-izlazne-fakture',
  templateUrl: './izlazne-fakture.component.html',
  styleUrl: './izlazne-fakture.component.scss'
})
export class IzlazneFaktureComponent implements OnInit {

  items: MenuItem[] = [{ label: 'Zaposleni' }];

  constructor(){}

  ngOnInit(): void {
  }
  
}
