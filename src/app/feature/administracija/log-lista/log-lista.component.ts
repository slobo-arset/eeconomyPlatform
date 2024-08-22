import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log-lista',
  templateUrl: './log-lista.component.html',
  styleUrls: ['./log-lista.component.scss']
})
export class LogListaComponent {
  logLista$: Observable<any>
}
