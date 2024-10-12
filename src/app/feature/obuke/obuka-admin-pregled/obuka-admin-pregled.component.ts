import { VideoService } from './../../../data-access/obuka/video.service';
import { CommentsService } from './../../../data-access/obuka/comments.service';
import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import * as Plyr from 'plyr';
import { MenuItem } from 'primeng/api';
import { Observable, switchMap } from 'rxjs';
import { MainStateService } from 'src/app/data-access/state/main-state.service';

@Component({
  selector: 'app-obuka-admin-pregled',
  templateUrl: './obuka-admin-pregled.component.html',
  styleUrl: './obuka-admin-pregled.component.scss'
})
export class ObukaAdminPregledComponent {
  items: MenuItem[] = [{ label: 'KPR' }];
  urlYoutube: string = this.mainStateService.getStateBykey('video').url;
  provider: any =  this.mainStateService.getStateBykey('video').provider;
  comment$: Observable<any>;
  video$: Observable<any>;
  commentData: any;

  constructor(
    private commentsService : CommentsService,
    private videoService : VideoService,
    public mainStateService: MainStateService
  ){}

  ngOnInit(): void {
    this.comment$ = this.commentsService.get(1);

  }

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
          src: this.urlYoutube,
          provider: this.provider,
        },
      ],
    };
  }


  saveComment(){

    const data = {
      "user_id": 1,
      "comment": this.commentData,
      "video_id": 1,
      "type_id": 1
    }

    this.comment$ = this.commentsService.create(data).pipe(
      switchMap(()=>{
        return this.commentsService.get(1);
      }
      )
    );

    this.commentData = '';

  }
}
