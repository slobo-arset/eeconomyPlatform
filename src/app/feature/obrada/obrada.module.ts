import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeleprodajnaKalkulacijaComponent } from './veleprodajna-kalkulacija/veleprodajna-kalkulacija.component';
import { UlazMaterijalaComponent } from './ulaz-materijala/ulaz-materijala.component';
import { IzlaznaFakturaComponent } from './izlazna-faktura/izlazna-faktura.component';
import { AvansniRacunComponent } from './avansni-racun/avansni-racun.component';
import { NefakturisaniRacuniComponent } from './nefakturisani-racuni/nefakturisani-racuni.component';
import { PredracunComponent } from './predracun/predracun.component';
import { OtpremnicaComponent } from './otpremnica/otpremnica.component';
import { InventuraComponent } from './inventura/inventura.component';
import { PocetnoStanjeComponent } from './pocetno-stanje/pocetno-stanje.component';
import { InventuraRazlikaComponent } from './inventura-razlika/inventura-razlika.component';
import { OtpisRobeComponent } from './otpis-robe/otpis-robe.component';
import { PovratRobeComponent } from './povrat-robe/povrat-robe.component';
import { NormativiComponent } from './normativi/normativi.component';
import { PoluproizvodiComponent } from './poluproizvodi/poluproizvodi.component';
import { MaloprodajnaNivelacijaComponent } from './maloprodajna-nivelacija/maloprodajna-nivelacija.component';
import { PregledMaloprodajnihRacunaComponent } from './pregled-maloprodajnih-racuna/pregled-maloprodajnih-racuna.component';
import { KnjiznoOdobrenjeComponent } from './knjizno-odobrenje/knjizno-odobrenje.component';
import { ProizvodniProcesComponent } from './proizvodni-proces/proizvodni-proces.component';
import { ProizvodniProcesPoluproizvodComponent } from './proizvodni-proces-poluproizvod/proizvodni-proces-poluproizvod.component';
import { RadniNalogComponent } from './radni-nalog/radni-nalog.component';
import { NalogZaKnjizenjeComponent } from './nalog-za-knjizenje/nalog-za-knjizenje.component';
import { RouterModule, Routes } from '@angular/router';
import { IzvornaFakturaComponent } from './izvorna-faktura/izvorna-faktura.component';
import { VeleprodajnaNivelacijaComponent } from './veleprodajna-nivelacija/veleprodajna-nivelacija.component';
import { PrenosRobeComponent } from './prenos-robe/prenos-robe.component';
import {TableModule} from "primeng/table";
import {SliderModule} from "primeng/slider";
import { MaloprodajnaKalkulacijaListaComponent } from './maloprodajna-kalkulacija/maloprodajna-kalkulacija-lista/maloprodajna-kalkulacija-lista.component';
import { MaloprodajnaKalkulacijaComponent } from './maloprodajna-kalkulacija/maloprodajna-kalkulacija.component';
import {ButtonModule} from "primeng/button";
import {InputSwitchModule} from "primeng/inputswitch";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";

const routes: Routes = [
  {
    path: 'maloprodajna-kalkulacija',
    component: MaloprodajnaKalkulacijaListaComponent,
  },
  {
    path: 'maloprodajna-kalkulacija/:id',
    component: MaloprodajnaKalkulacijaComponent,
  },
  {
    path: 'veleprodajna-kalkulacija',
    component: VeleprodajnaKalkulacijaComponent,
  },
  {
    path: 'ulaz-materijala',
    component: UlazMaterijalaComponent,
  },
  {
    path: 'izlazna-faktura',
    component: IzlaznaFakturaComponent,
  },
  {
    path: 'izvorna-faktura',
    component: IzvornaFakturaComponent,
  },
  {
    path: 'avansni-racun',
    component: AvansniRacunComponent,
  },
  {
    path: 'nefakturisani-racuni',
    component: NefakturisaniRacuniComponent,
  },
  {
    path: 'predracun',
    component: PredracunComponent,
  },
  {
    path: 'otpremnica',
    component: OtpremnicaComponent,
  },
  {
    path: 'inventura',
    component: InventuraComponent,
  },
  {
    path: 'pocetno-stanje',
    component: PocetnoStanjeComponent,
  },
  {
    path: 'inventura-razlika',
    component: InventuraRazlikaComponent,
  },
  {
    path: 'otpis-robe',
    component: OtpisRobeComponent,
  },
  {
    path: 'prenos-robe',
    component: PrenosRobeComponent,
  },
  {
    path: 'povrat-robe',
    component: PovratRobeComponent,
  },
  {
    path: 'normativi',
    component: NormativiComponent,
  },
  {
    path: 'poluproizvodi',
    component: PoluproizvodiComponent,
  },
  {
    path: 'maloprodajna-nivelacija',
    component: MaloprodajnaNivelacijaComponent,
  },
  {
    path: 'veleprodajna-nivelacija',
    component: VeleprodajnaNivelacijaComponent,
  },
  {
    path: 'pregled-maloprodajnih-racuna',
    component: PregledMaloprodajnihRacunaComponent,
  },
  {
    path: 'knjizno-odobrenje',
    component: KnjiznoOdobrenjeComponent,
  },
  {
    path: 'proizvodni-proces',
    component: ProizvodniProcesComponent,
  },
  {
    path: 'proizvodni-proces-poluproizvod',
    component: ProizvodniProcesPoluproizvodComponent,
  },
  {
    path: 'radni-nalog',
    component: RadniNalogComponent,
  },
  {
    path: 'nalog-za-knjizenje',
    component: NalogZaKnjizenjeComponent,
  },

];

@NgModule({
  declarations: [
    VeleprodajnaKalkulacijaComponent,
    UlazMaterijalaComponent,
    IzlaznaFakturaComponent,
    AvansniRacunComponent,
    NefakturisaniRacuniComponent,
    PredracunComponent,
    OtpremnicaComponent,
    InventuraComponent,
    PocetnoStanjeComponent,
    InventuraRazlikaComponent,
    OtpisRobeComponent,
    PovratRobeComponent,
    NormativiComponent,
    PoluproizvodiComponent,
    MaloprodajnaNivelacijaComponent,
    PregledMaloprodajnihRacunaComponent,
    KnjiznoOdobrenjeComponent,
    ProizvodniProcesComponent,
    ProizvodniProcesPoluproizvodComponent,
    RadniNalogComponent,
    NalogZaKnjizenjeComponent,
    VeleprodajnaNivelacijaComponent,
    PrenosRobeComponent,
    MaloprodajnaKalkulacijaListaComponent,
    MaloprodajnaKalkulacijaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    SliderModule,
    ButtonModule,
    InputSwitchModule,
    InputTextModule,
    InputNumberModule,
  ]
})
export class ObradaModule { }
