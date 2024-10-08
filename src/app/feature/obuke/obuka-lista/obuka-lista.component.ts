import {ActivatedRoute, Router} from '@angular/router';
import { VideoService } from './../../../data-access/obuka/video.service';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable, switchMap, tap } from 'rxjs';
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
  category: string = '';

  constructor(
    public mainStateService: MainStateService,
    public videoService: VideoService,
    private router: Router,
    private route: ActivatedRoute,
  ){}


  ngOnInit(): void {
    this.itemsList$ = this.route.url.pipe(
      tap((data)=>{
        this.category = data[1].path
      }),
      switchMap((data)=>{
        return this.videoService.getVideoByCategory(data[1].path)
      })
    )
    this.userData  =  this.mainStateService.getStateBykey('user');
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
      "category_id":  this.category,
      "is_active": this.statusSelected ? 1 : 0,
    }

    this.itemsList$ = this.videoService.create(data).pipe(
      switchMap(()=>{
        return this.videoService.getVideoByCategory('1')
      })
    )
    this.visible = false;

  }

  showVideo(data: any){
    this.mainStateService.setAppState({video: {url: data.link, provider : data.provider}})
    this.router.navigate([`/obuka/obuka/${data.category_id}/video/${data.id}`])
  }

  edit(){}
}
