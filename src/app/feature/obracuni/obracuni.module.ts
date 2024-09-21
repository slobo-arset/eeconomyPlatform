import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NaknadaNezaposleniComponent } from './naknada-nezaposleni/naknada-nezaposleni.component';
import { NaknadaTroskovaZaposlenihComponent } from './naknada-troskova-zaposlenih/naknada-troskova-zaposlenih.component';
import { NaknadaZaradeComponent } from './naknada-zarade/naknada-zarade.component';
import { ObracunDrugihPrihodaComponent } from './obracun-drugih-prihoda/obracun-drugih-prihoda.component';
import { PpposloviComponent } from './ppposlovi/ppposlovi.component';
import { PrihodiIzRadnogOdnosaComponent } from './prihodi-iz-radnog-odnosa/prihodi-iz-radnog-odnosa.component';
import { PrihodiVanRadnogOdnosaComponent } from './prihodi-van-radnog-odnosa/prihodi-van-radnog-odnosa.component';

const routes: Routes = [
  { path: 'obuka/:id/:naslov', component: ObukaListaComponent },
  { path: 'obuka/:id/video/:vid', component: ObukaPregledComponent },
];

@NgModule({
  declarations: [
    NaknadaNezaposleniComponent,
    NaknadaTroskovaZaposlenihComponent,
    NaknadaZaradeComponent,
    ObracunDrugihPrihodaComponent,
    PpposloviComponent,
    PrihodiIzRadnogOdnosaComponent,
    PrihodiVanRadnogOdnosaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    NaknadaNezaposleniComponent,
    NaknadaTroskovaZaposlenihComponent,
    NaknadaZaradeComponent,
    ObracunDrugihPrihodaComponent,
    PpposloviComponent,
    PrihodiIzRadnogOdnosaComponent,
    PrihodiVanRadnogOdnosaComponent

  ]
})
export class ObracuniModule { }
