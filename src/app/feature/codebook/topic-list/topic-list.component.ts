import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { MainStateService } from 'src/app/data-access/state/main-state.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.scss'
})
export class TopicListComponent {

  constructor(
    private router: Router,
    public mainStateService: MainStateService,
  ){}

  dokument$: Observable<any[]> = of([
    {id: 1,  name: 'Edukator SPIRI'},
    {id: 2,  name: 'Edukator FUK'},
    {id: 3,  name: 'Edukator šeme knjiženja'},
  ])
  items: MenuItem[] = [{ label: 'Teme snimaka' }];

  goToDokument(id: number){
    this.mainStateService.setAppState({tema: id});
    this.router.navigate(['/šifarnici/teme/lista']);
  }
}
