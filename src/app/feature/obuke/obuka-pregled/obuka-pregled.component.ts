import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import * as Plyr from 'plyr';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-obuka-pregled',
  templateUrl: './obuka-pregled.component.html',
  styleUrl: './obuka-pregled.component.scss'
})
export class ObukaPregledComponent {

  items: MenuItem[] = [{ label: 'KPR' }];

  ngAfterViewInit() {
    const player = new Plyr('#player', {
      youtube: {
        noCookie: true,
        rel: 0,
        modestbranding: 1,
      },
    });

    player.source = {
      type: 'video',
      sources: [
        {
          src: 'dypbUSpGjd4',
          provider: 'youtube',
        },
      ],
    };


  }


}
