import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-export-spiri',
  templateUrl: './export-spiri.component.html',
  styleUrl: './export-spiri.component.scss'
})
export class ExportSpiriComponent implements OnInit {

  items: MenuItem[] = [{ label: 'Generisanje plaćanja' }];

  constructor(){}

  ngOnInit(): void {
  }

}
