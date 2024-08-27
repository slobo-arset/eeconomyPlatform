import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {

  @Input() items: MenuItem[];
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  constructor(){}

}
