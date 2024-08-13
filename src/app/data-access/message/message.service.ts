import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DisplayMessageService {

  messageEmitter: Subject<any> = new Subject();

  constructor() { }

  emitMessageAlert(): void {
    this.messageEmitter.next({
      severity: 'error',
      summary: 'GREŠKA',
      detail: 'Pogrešna šifra ili korisničko ime',
    });
  }

}
