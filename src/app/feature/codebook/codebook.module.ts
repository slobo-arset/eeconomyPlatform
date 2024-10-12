import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from 'src/app/ui/ui.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EkonomskaKlasifikacijaComponent } from './ekonomska-klasifikacija/ekonomska-klasifikacija.component';
import { EkonomskaKlasifikacijaModalComponent } from './ekonomska-klasifikacija/ekonomska-klasifikacija-modal/ekonomska-klasifikacija-modal.component';
import { ContextMenuModule } from 'primeng/contextmenu';
import { InplaceModule } from 'primeng/inplace';
import { EkonomskaPodklasifikacijaComponent } from './ekonomska-podklasifikacija/ekonomska-podklasifikacija.component';
import { EkonomskaPodklasifikacijaModalComponent } from './ekonomska-podklasifikacija/ekonomska-podklasifikacija-modal/ekonomska-podklasifikacija-modal.component';
import { IzvorFinansiranjaComponent } from './izvor-finansiranja/izvor-finansiranja.component';
import { IzvorFinansiranjaModalComponent } from './izvor-finansiranja/izvor-finansiranja-modal/izvor-finansiranja-modal.component';
import { KontoKnjizenjaComponent } from './konto-knjizenja/konto-knjizenja.component';
import { KontoKnjizenjaModalComponent } from './konto-knjizenja/konto-knjizenja-modal/konto-knjizenja-modal.component';
import { PodizvorFinansiranjaComponent } from './podizvor-finansiranja/podizvor-finansiranja.component';
import { PodizvorFinansiranjaModalComponent } from './podizvor-finansiranja/podizvor-finansiranja-modal/podizvor-finansiranja-modal.component';
import { SifraProgramaComponent } from './sifra-programa/sifra-programa.component';
import { SifraProgramaModalComponent } from './sifra-programa/sifra-programa-modal/sifra-programa-modal.component';
import { SifraProjektaComponent } from './sifra-projekta/sifra-projekta.component';
import { SifraProjektaModalComponent } from './sifra-projekta/sifra-projekta-modal/sifra-projekta-modal.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicPrevComponent } from './topic-list/topic-prev/topic-prev.component';
import { TopicModalComponent } from './topic-list/topic-modal/topic-modal.component';

const routes: Routes = [
  { path: 'ekonomska-klasifikacija', component: EkonomskaKlasifikacijaComponent },
  { path: 'ekonomska-podklasifikacija', component: EkonomskaPodklasifikacijaComponent },
  { path: 'izvor-finansiranja', component: IzvorFinansiranjaComponent },
  { path: 'podizvor-finansiranja', component: PodizvorFinansiranjaComponent },
  { path: 'konto-knjizenja', component: KontoKnjizenjaComponent },
  { path: 'sifra-programa', component: SifraProgramaComponent },
  { path: 'sifra-projekta', component: SifraProjektaComponent },
  { path: 'teme', component: TopicListComponent },
  { path: 'teme/lista', component: TopicPrevComponent },
]

@NgModule({
  declarations: [
    EkonomskaKlasifikacijaComponent,
    EkonomskaKlasifikacijaModalComponent,
    EkonomskaPodklasifikacijaComponent,
    EkonomskaPodklasifikacijaModalComponent,
    IzvorFinansiranjaComponent,
    IzvorFinansiranjaModalComponent,
    KontoKnjizenjaComponent,
    KontoKnjizenjaModalComponent,
    PodizvorFinansiranjaComponent,
    PodizvorFinansiranjaModalComponent,
    SifraProgramaComponent,
    SifraProgramaModalComponent,
    SifraProjektaComponent,
    SifraProjektaModalComponent,
    TopicListComponent,
    TopicPrevComponent,
    TopicModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
        TableModule,
    ButtonModule,
    SidebarModule,
    InplaceModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    DropdownModule,
    InputSwitchModule,
    ContextMenuModule
  ],
  exports: [
    RouterModule,


  ]
})
export class CodebookModule { }
