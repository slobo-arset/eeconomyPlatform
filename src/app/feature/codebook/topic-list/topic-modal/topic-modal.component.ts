
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { catchError, of, tap } from 'rxjs';
import { TopicService } from 'src/app/data-access/obuka/topic.service';
import { MainStateService } from 'src/app/data-access/state/main-state.service';

@Component({
  selector: 'app-topic-modal',
  templateUrl: './topic-modal.component.html',
  styleUrl: './topic-modal.component.scss'
})
export class TopicModalComponent {
  form = this.fb.group({
    id:[0],
    name:['', Validators.required],
  });

  userData: any;
  tema: any;

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public topicService: TopicService,
    public mainStateService: MainStateService,

  ) {
    this.tema  =  this.mainStateService.getStateBykey('tema');
    this.userData  =  this.mainStateService.getStateBykey('user');
  }


  create(val) {
    if(this.form.valid){
      const req:any = {
        name: val.name,
        category_id: this.tema,
      }
      this.topicService.create(req).pipe(
        catchError((msg) => {
          console.log('Error create Dokument: ', msg);
          return of([])
        }),
        tap((res:any)=> {
          this.closeDialog()
        })
      ).subscribe()
    } else {
      console.log('nije')
    }
  }


  onSubmit(val:any) {
     this.create(val)
  }

  closeDialog(): void {
    this.ref.close({ reload: true });
  }
}
