import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Observable, switchMap } from 'rxjs';
import { TopicService } from 'src/app/data-access/obuka/topic.service';
import { MainStateService } from 'src/app/data-access/state/main-state.service';
import { TopicModalComponent } from '../topic-modal/topic-modal.component';

@Component({
  selector: 'app-topic-prev',
  templateUrl: './topic-prev.component.html',
  styleUrl: './topic-prev.component.scss',
  providers: [DialogService]
})
export class TopicPrevComponent {
  ref: DynamicDialogRef | undefined;

  dokument$: Observable<any[]>;
  userData: any;
  tema: any;
  loading: boolean = true;

  items: MenuItem[] = [
    { label: 'Teme', routerLink: '/šifarnici/teme' },
    { label: 'Teme snimaka'}
  ];
  contextData: any;
  context: MenuItem[] =  [
    {label: 'Obriši', icon: 'pi pi-fw pi-trash', command: () => this.deleteDokument(this.contextData.id)}
  ];


  constructor(
    private router: Router,
    public dialogService: DialogService,
    public topicService: TopicService,
    public mainStateService: MainStateService,
) {}

  ngOnInit() {
    this.userData  =  this.mainStateService.getStateBykey('user');
    this.tema  =  this.mainStateService.getStateBykey('tema');
    this.dokument$ = this.topicService.getTopicByCategory(this.tema)
  }

  clear(table: Table) {
      table.clear();
  }


  goToDokument(id:number){
   this.ref = this.dialogService.open(TopicModalComponent, { header: 'Izmeni temu', width: '600px', data: { mode:'edit', id:id }});

    this.ref.onClose.subscribe((result: any) => {
      console.log('Dialog closed with result:', result);
      if(result!== undefined) {
        this.loading = true;
        this.dokument$ = this.topicService.getTopicByCategory(this.tema)
      }
    });
  }


  createDokument(){
    this.ref = this.dialogService.open(TopicModalComponent, { header: 'Kreiraj temu', width: '600px', data: { mode:'create' }});
    this.ref.onClose.subscribe((result: any) => {
      this.dokument$ =  this.topicService.getTopicByCategory(this.tema)
    });
  }

  deleteDokument(id:string) {
    this.dokument$ =  this.topicService.delete(id).pipe(
      switchMap(()=>{
        return this.topicService.getTopicByCategory(this.tema)
      })
    )
  }
}
