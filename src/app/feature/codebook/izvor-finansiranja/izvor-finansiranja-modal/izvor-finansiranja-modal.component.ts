import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { catchError, of, tap } from 'rxjs';
import { IzvorFinansiranjaService } from 'src/app/data-access/codebook/izvor-finansiranja.service';
import { MainStateService } from 'src/app/data-access/state/main-state.service';

@Component({
  selector: 'app-izvor-finansiranja-modal',
  templateUrl: './izvor-finansiranja-modal.component.html',
  styleUrl: './izvor-finansiranja-modal.component.scss'
})
export class IzvorFinansiranjaModalComponent {
  form = this.fb.group({
    id:[0],
    naziv:['', Validators.required],
    sifra:['', Validators.required],
    opis:['', Validators.required], 

  });

  userData: any;

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public izvorFinansiranjaService: IzvorFinansiranjaService,
    public mainStateService: MainStateService,

  ) {
    this.userData  =  this.mainStateService.getStateBykey('user');
    if(this.config.data.mode ==='edit' || this.config.data.mode ==='preview') {
      this.izvorFinansiranjaService.getById(this.config.data.id).subscribe((data:any)=>{
        this.patchValues(data)
      })
    }
  }

  patchValues(data:any) {
    this.form.patchValue({
      id:data.id,
      naziv: data.naziv,
      sifra: data.sifra,
      opis: data.opis
    });
  }

  create(val) {
    if(this.form.valid){
      const req:any = {
        naziv: val.naziv,
        sifra:val.sifra,
        opis: val.opis,
        company_id: this.userData.company_id,
        is_active: 1
      }
      this.izvorFinansiranjaService.create(req).pipe(
        catchError((msg) => {
          console.log('Error create Dokument: ', msg);
          return of([])
        }),
        tap((res:any)=> {
          if( Object.keys(res).length == 0) {
            this.closeDialog()
          } else {
            console.log('err')
          }
        })
      ).subscribe()
    } else {
      console.log('nije')
    }
  }

  update(val) {
    console.log('update')
    if(this.form.valid){
      const req:any = {
        naziv: val.naziv,
        sifra:val.sifra,
        opis: val.opis,
        company_id: this.userData.company_id,
        is_active: 1
      }
      this.izvorFinansiranjaService.update(req, val.id).pipe(
        catchError((msg) => {
          console.log('Error update Dokument: ', msg);
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
    if(this.config.data.mode === 'create') this.create(val)
    else if(this.config.data.mode === 'edit') this.update(val)

  }

  closeDialog(): void {
    this.ref.close({ reload: true });
  }
}
