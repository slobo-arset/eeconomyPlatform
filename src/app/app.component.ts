import { Component, HostListener, OnInit } from '@angular/core';
import { MainStateService } from './data-access/state/main-state.service';
import { SessionContextService } from './data-access/state/session-context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Stručne usluge - e-EconomY';

  @HostListener('window:beforeunload') onRefresh() {
    if(this.mainStateService.getState() && Object.keys(this.mainStateService.getState()).length >0) {
        sessionStorage.setItem('state', JSON.stringify( this.mainStateService.getState()))
    }
  }

  constructor(
    public mainStateService: MainStateService,
    private sessionContext: SessionContextService
  ){}

  ngOnInit() {

    const state = sessionStorage.getItem('state');

    if(state) {
        this.mainStateService.setAppState(JSON.parse(state));
        sessionStorage.removeItem('state');
    }

    this.sessionContext.init();

  }

}
