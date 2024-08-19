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


  emitMandatoryFieldsEmpty(): void {
    this.messageEmitter.next({
      severity: 'info',
      summary: 'OBAVEŠTENJE',
      detail: 'Potrebno je popuniti sva obavezna polja',
    });
  }

  emitMustAgreePrivacy(): void {
    this.messageEmitter.next({
      severity: 'info',
      summary: 'OBAVEŠTENJE',
      detail: 'Potrebno je prihvatiti politiku privatnosti',
    });
  }

  emitMustAgreeTerms(): void {
    this.messageEmitter.next({
      severity: 'info',
      summary: 'OBAVEŠTENJE',
      detail: 'Potrebno je prihvatiti uslove korišćenja',
    });
  }


  emitCompanyAlreadyExists(): void {
    this.messageEmitter.next({
      severity: 'info',
      summary: 'OBAVEŠTENJE',
      detail: 'Pravno lice ili korisnik su već registrovani.',
    });
  }

  emitSuccessRegistration(): void {
    this.messageEmitter.next({
      severity: 'success',
      summary: 'OBAVEŠTENJE',
      detail: 'Uspešno ste se prijavili. Predračun je poslat na vašu mail adresu.',
    });
  }
}
