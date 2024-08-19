import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriptionService } from 'src/app/data-access/subscription/subscription.service';

@Component({
  selector: 'app-pretplate',
  templateUrl: './pretplate.component.html',
  styleUrls: ['./pretplate.component.scss']
})
export class PretplateComponent implements OnInit {

  subscription$: Observable<any>

  constructor(private subscriptionService: SubscriptionService){}

  ngOnInit(): void {
    this.subscription$ = this.subscriptionService.getAll()
  }

}
