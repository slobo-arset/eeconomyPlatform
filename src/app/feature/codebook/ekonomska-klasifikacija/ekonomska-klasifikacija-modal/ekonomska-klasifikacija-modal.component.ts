import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-ekonomska-klasifikacija-modal',
  templateUrl: './ekonomska-klasifikacija-modal.component.html',
  styleUrl: './ekonomska-klasifikacija-modal.component.scss'
})
export class EkonomskaKlasifikacijaModalComponent {
  form = this.fb.group({
    id:[0],
    name:['', Validators.required],
    code:['', Validators.required]
  });


  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,

  ) {
    // if(this.config.data.mode ==='edit' || this.config.data.mode ==='preview') {
    //   this.dokumentsService.getOneDokument(this.config.data.id).subscribe((data:Dokument)=>{
    //     this.patchValues(data)
    //   })
    // }
  }

  patchValues(data:any) {
    this.form.patchValue({
      id:data.id,
      name: data.name,
      code:data.code
    });
  }

  create(val) {
    if(this.form.valid){
      const req:any = {
        name: val.name,
        code:val.code,
        is_active: 1
      }
      // this.dokumentsService.create(req).pipe(
      //   catchError((msg) => {
      //     console.log('Error create Dokument: ', msg);
      //     return of([])
      //   }),
      //   tap((res:any)=> {
      //     if( Object.keys(res).length == 0) {
      //       this.closeDialog()
      //     } else {
      //       console.log('err')
      //     }
      //   })
      // ).subscribe()
    } else {
      console.log('nije')
    }
  }

  update(val) {
    console.log('update')
    if(this.form.valid){
      const req:any = {
        id:val.id,
        name: val.name,
        code: val.code,
        is_active: 1
      }
      // this.dokumentsService.update(req).pipe(
      //   catchError((msg) => {
      //     console.log('Error update Dokument: ', msg);
      //     return of([])
      //   }),
      //   tap((res:any)=> {
      //     this.closeDialog()
      //   })
      // ).subscribe()
    } else {
      console.log('nije')
    }
  }

  onSubmit(val:any) {
    console.log('form val', val);
    if(this.config.data.mode === 'create') this.create(val)
    else if(this.config.data.mode === 'edit') this.update(val)

  }

  closeDialog(): void {
    this.ref.close({ reload: true });
  }
}
