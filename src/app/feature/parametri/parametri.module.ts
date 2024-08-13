import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArtikliListComponent} from './artikli-list/artikli-list.component';
import {ArtikliEditComponent} from './artikli-edit/artikli-edit.component';
import {JediniceMereListComponent} from './jedinice-mere-list/jedinice-mere-list.component';
import {JediniceMereEditComponent} from './jedinice-mere-edit/jedinice-mere-edit.component';
import {VrsteListComponent} from './vrste-list/vrste-list.component';
import {VrsteEditComponent} from './vrste-edit/vrste-edit.component';
import {PoslovniceListComponent} from './poslovnice-list/poslovnice-list.component';
import {PoslovniceEditComponent} from './poslovnice-edit/poslovnice-edit.component';
import {SkladistaListComponent} from './skladista-list/skladista-list.component';
import {SkladistaEditComponent} from './skladista-edit/skladista-edit.component';
import {KupciDobavljaciListComponent} from './kupci-dobavljaci-list/kupci-dobavljaci-list.component';
import {KupciDobavljaciEditComponent} from './kupci-dobavljaci-edit/kupci-dobavljaci-edit.component';
import {KupciFizickaLicaListComponent} from './kupci-fizicka-lica-list/kupci-fizicka-lica-list.component';
import {KupciFizickaLicaEditComponent} from './kupci-fizicka-lica-edit/kupci-fizicka-lica-edit.component';
import {PorezneStopeListComponent} from './porezne-stope-list/porezne-stope-list.component';
import {PorezneStopeEditComponent} from './porezne-stope-edit/porezne-stope-edit.component';
import {PorezNaPotrosnjuListComponent} from './porez-na-potrosnju-list/porez-na-potrosnju-list.component';
import {PorezNaPotrosnjuEditComponent} from './porez-na-potrosnju-edit/porez-na-potrosnju-edit.component';
import {NapomeneListComponent} from './napomene-list/napomene-list.component';
import {NapomeneEditComponent} from './napomene-edit/napomene-edit.component';
import {DrzaveListComponent} from './drzave-list/drzave-list.component';
import {DrzaveEditComponent} from './drzave-edit/drzave-edit.component';
import {BankeListComponent} from './banke-list/banke-list.component';
import {BankeEditComponent} from './banke-edit/banke-edit.component';
import {VrstePlacanjaListComponent} from './vrste-placanja-list/vrste-placanja-list.component';
import {VrstePlacanjaEditComponent} from './vrste-placanja-edit/vrste-placanja-edit.component';
import {RouterModule, Routes} from '@angular/router';
import {GrupeListComponent} from './grupe-list/grupe-list.component';
import {GrupeEditComponent} from './grupe-edit/grupe-edit.component';


import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputSwitchModule} from "primeng/inputswitch";
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {DynamicDialogModule} from "primeng/dynamicdialog";

const routes: Routes = [
  {
    path: 'artikli',
    component: ArtikliListComponent,
  },
  {
    path: 'artikli/:id',
    component: ArtikliEditComponent,
  },
  {
    path: 'jedinica-mere',
    component: JediniceMereListComponent,
  },
  {
    path: 'jedinica-mere/:id',
    component: JediniceMereEditComponent,
  },
  {
    path: 'vrste',
    component: VrsteListComponent,
  },
  {
    path: 'vrste/:id',
    component: VrsteEditComponent,
  },
  {
    path: 'grupe',
    component: GrupeListComponent,
  },
  {
    path: 'grupe/:id',
    component: GrupeEditComponent,
  },
  {
    path: 'poslovnice',
    component: PoslovniceListComponent,
  },
  {
    path: 'poslovnice/:id',
    component: PoslovniceEditComponent,
  },
  {
    path: 'skladista',
    component: SkladistaListComponent,
  },
  {
    path: 'skladista/:id',
    component: SkladistaEditComponent,
  },
  {
    path: 'kupci-dobavljaci',
    component: KupciDobavljaciListComponent,
  },
  {
    path: 'kupci-dobavljaci/:id',
    component: KupciDobavljaciEditComponent,
  },
  {
    path: 'kupci-fizicka-lica',
    component: KupciFizickaLicaListComponent,
  },
  {
    path: 'kupci-fizicka-lica/:id',
    component: KupciFizickaLicaEditComponent,
  },
  {
    path: 'porezne-stope',
    component: PorezneStopeListComponent,
  },
  {
    path: 'porezne-stope/:id',
    component: PorezneStopeEditComponent,
  },
  {
    path: 'porez-na-potrosnju',
    component: PorezNaPotrosnjuListComponent,
  },
  {
    path: 'porez-na-potrosnju/:id',
    component: PorezNaPotrosnjuEditComponent,
  },
  {
    path: 'napomene',
    component: NapomeneListComponent,
  },
  {
    path: 'napomene/:id',
    component: NapomeneEditComponent,
  },
  {
    path: 'drzave',
    component: DrzaveListComponent,
  },
  {
    path: 'drzave/:id',
    component: DrzaveEditComponent,
  },
  {
    path: 'banke',
    component: BankeListComponent,
  },
  {
    path: 'sklbankedista/:id',
    component: BankeEditComponent,
  },
  {
    path: 'vrste-placanja',
    component: VrstePlacanjaListComponent,
  },
  {
    path: 'vrste-placanja/:id',
    component: VrstePlacanjaEditComponent,
  },

];


@NgModule({
  declarations: [
    ArtikliListComponent,
    ArtikliEditComponent,
    JediniceMereListComponent,
    JediniceMereEditComponent,
    VrsteListComponent,
    VrsteEditComponent,
    PoslovniceListComponent,
    PoslovniceEditComponent,
    SkladistaListComponent,
    SkladistaEditComponent,
    KupciDobavljaciListComponent,
    KupciDobavljaciEditComponent,
    KupciFizickaLicaListComponent,
    KupciFizickaLicaEditComponent,
    PorezneStopeListComponent,
    PorezneStopeEditComponent,
    PorezNaPotrosnjuListComponent,
    PorezNaPotrosnjuEditComponent,
    NapomeneListComponent,
    NapomeneEditComponent,
    DrzaveListComponent,
    DrzaveEditComponent,
    BankeListComponent,
    BankeEditComponent,
    VrstePlacanjaListComponent,
    VrstePlacanjaEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    ButtonModule,
    InputSwitchModule,
    InputTextModule,
    FileUploadModule,
    HttpClientModule,
    CheckboxModule,
    DropdownModule,
    DynamicDialogModule
  ]
})
export class ParametriModule {
}
