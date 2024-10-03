import { Router } from '@angular/router';
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

  cities: any[] =  [
    { name: 'youtube', code: '1' },
    { name: 'vimeo', code: '2' },
  ];
  selectedCity: any;

  constructor(
    public mainStateService: MainStateService,
    public videoService: VideoService,
    private router: Router
  ){}


  ngOnInit(): void {
    this.userData  =  this.mainStateService.getStateBykey('user');
    console.log('dataaat', this.userData)
    this.mainStateService.setAppState({video: {url:'1014246952', provider : 'vimeo'}})
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
      "provider": this.selectedCity.name,
      "category_id": 1,
      "is_active": 1,
    }

    this.itemsList$ = this.videoService.create(data).pipe(
      switchMap(()=>{
        return this.videoService.getVideoByCategory(1)
      })
    )
    this.visible = false;

  }

  showVideo(data: any){
    this.mainStateService.setAppState({video: {url: data.link, provider : data.provider}})
    this.router.navigate(['/obuka/obuka/1/video/1'])
  }
}
