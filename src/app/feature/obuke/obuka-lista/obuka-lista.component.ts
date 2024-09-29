import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-obuka-lista',
  templateUrl: './obuka-lista.component.html',
  styleUrl: './obuka-lista.component.scss'
})
export class ObukaListaComponent {
  itemsList = Array(15).fill(0);

  items: MenuItem[] = [{ label: 'Zaposleni' }];

  constructor(){}

  ngOnInit(): void {
  }
}
