import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-ulazne-fakture',
  templateUrl: './ulazne-fakture.component.html',
  styleUrl: './ulazne-fakture.component.scss'
})
export class UlazneFaktureComponent {
  orders: any;
  items: MenuItem[] = [{ label: 'KPR' }];
}
