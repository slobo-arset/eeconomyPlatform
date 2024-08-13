import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {DisplayMessageService} from "../../data-access/message/message.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-message-toast',
  templateUrl: './message-toast.component.html',
  styleUrls: ['./message-toast.component.scss']
})
export class MessageToastComponent implements OnInit{

  constructor(
    private messageService: MessageService,
    private displayMessageService: DisplayMessageService
  ) {}

  ngOnInit(): void {
    this.displayMessageService.messageEmitter
      .pipe(
        tap((data: any): void => {
          this.showMessage(data);
        })
      )
      .subscribe();
  }

  showMessage(obj: any){
    this.messageService.add(obj)
  }



}
