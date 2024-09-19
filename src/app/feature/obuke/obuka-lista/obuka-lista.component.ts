import { Component } from '@angular/core';

@Component({
  selector: 'app-obuka-lista',
  templateUrl: './obuka-lista.component.html',
  styleUrl: './obuka-lista.component.scss'
})
export class ObukaListaComponent {
  items = Array(15).fill(0);
}
