import {ActivatedRoute, Router} from '@angular/router';
import { VideoService } from './../../../data-access/obuka/video.service';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable, switchMap } from 'rxjs';
import { MainStateService } from 'src/app/data-access/state/main-state.service';

@Component({
  selector: 'app-obuka-lista',
  templateUrl: './obuka-lista.component.html',
  styleUrl: './obuka-lista.component.scss'
})
export class ObukaListaComponent {
  itemsList$: Observable<any>;
  userData: any;

  items: MenuItem[] = [{ label: 'Zaposleni' }];
  visible: boolean;
  name: string;
  link: string;
  short_desc: string;

  status: any[] =  [
    { name: 'Neaktivan', code: false },
    { name: 'Aktivan', code: true },
  ];
  statusSelected: any;

  provider: any[] =  [
    { name: 'youtube', code: '1' },
    { name: 'vimeo', code: '2' },
  ];
  providerSelected: any;

  constructor(
    public mainStateService: MainStateService,
    public videoService: VideoService,
    private router: Router,
    private route: ActivatedRoute,
  ){}


  ngOnInit(): void {
    this.route.url.subscribe((params ) => {
      console.log('doslo je do promene', params[1].path )
    });
    this.userData  =  this.mainStateService.getStateBykey('user');
    this.itemsList$ = this.videoService.getVideoByCategory(1)
  }


  showDialog() {
    this.visible = true;
  }

  create(){
    const data = {
      "link" : this.link,
      "name": this.name,
      "short_desc": this.short_desc,
      "provider": this.providerSelected.name,
      "category_id": 1,
      "is_active": this.statusSelected ? 1 : 0,
    }

    this.itemsList$ = this.videoService.create(data).pipe(
      switchMap(()=>{
        return this.videoService.getVideoByCategory(1)
      })
    )
    this.visible = false;

  }

  showVideo(data: any){
    console.log(data)
    //this.mainStateService.setAppState({video: {url: data.link, provider : data.provider}})
    //this.router.navigate(['/obuka/obuka/1/video/1'])
  }
}
