import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KufComponent } from './kuf/kuf.component';
import { KifComponent } from './kif/kif.component';
import { TroskoviComponent } from './troskovi/troskovi.component';
import { PdvPrijavaComponent } from './pdv-prijava/pdv-prijava.component';
import { PdvExportComponent } from './pdv-export/pdv-export.component';



@NgModule({
  declarations: [
    KufComponent,
    KifComponent,
    TroskoviComponent,
    PdvPrijavaComponent,
    PdvExportComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PdvModule { }
