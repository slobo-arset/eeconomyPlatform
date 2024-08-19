import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {LayoutService} from './service/app.layout.service';
import {Store} from "@ngrx/store";
import { MainStateService } from '../data-access/state/main-state.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];
  companyName = '';

  constructor(
    public layoutService: LayoutService,
    public mainStateService: MainStateService
  ) {
  }

  ngOnInit() {
    const user  =  this.mainStateService.getStateBykey('user')
    console.log(user)

    if(user.tip == 1){
      this.model = [
        {
          label: '',
          items: [
              { label: 'Početna', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
              { label: 'Korisnici', icon: 'pi pi-fw pi-users', routerLink: ['/users'] },
              { label: 'Pretplate', icon: 'pi pi-fw pi-euro', routerLink: ['/subscription'] },
          ]
        }
      ]

    } else {

      this.model = [
        {
          label: '',
          items: [
              { label: 'Početna', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
              { label: 'XML konvertor', icon: 'pi pi-fw pi-file-export', routerLink: ['/xml/convertor'] },
              { label: 'Zaposleni', icon: 'pi pi-fw pi-users', routerLink: ['/employees'] },

          ]
        }
      ]
    }
    //this.model = [
      // {
      //   label: 'Početna',
      //   items: [
      //     {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']}
      //   ]
      // },

      // {
      //   label: 'Moduli',
      //   icon: 'pi pi-fw pi-briefcase',
      //   items: [
      //     {
      //       label: 'ADMINISTRACIJA',
      //       icon: 'pi pi-fw pi-user',
      //       items: [
      //         {
      //           label: 'Otvaranje novih klijenata',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/administracija/lista-klijenta']
      //         },
      //         {
      //           label: 'Otvaranje kasa klijenata',
      //           icon: 'pi pi-fw pi-times-circle',
      //           routerLink: ['/administracija/lista-klijenta']
      //         },
      //         {
      //           label: 'Administriranje',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/administracija/lista-klijenta']
      //         },
      //         {
      //           label: 'Izvjestaji o klijentima',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/administracija/izvestaj-o-klientima']
      //         }
      //       ]
      //     },
      //     {
      //       label: 'KLIENT',
      //       icon: 'pi pi-fw pi-user',
      //       items: [
      //         {
      //           label: 'Klijent',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/korisnik/edit']
      //         },
      //         {
      //           label: 'Fiskalni izvještaji',
      //           icon: 'pi pi-fw pi-times-circle',
      //           routerLink: ['/korisnik/fiskalni-izvestaj']
      //         }
      //       ]
      //     },
      //     {
      //       label: 'PARAMETRI',
      //       icon: 'pi pi-fw pi-user',
      //       items: [
      //         {
      //           label: 'Artikli',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/parametri/artikli']
      //         },
      //         {
      //           label: 'Jedinice mjere',
      //           icon: 'pi pi-fw pi-times-circle',
      //           routerLink: ['/parametri/jedinica-mere']
      //         },
      //         {
      //           label: 'Vrste',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/parametri/vrste']
      //         },
      //         {
      //           label: 'Grupe',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/parametri/grupe']
      //         },
      //         {
      //           label: 'Poslovnice',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/parametri/poslovnice']
      //         },
      //         {
      //           label: 'Skladišta',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/parametri/skladista']
      //         },
      //         {
      //           label: 'Kupci-Dobavljači',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/parametri/kupci-dobavljaci']
      //         },
      //         {
      //           label: 'Kupci fizička lica',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/parametri/kupci-fizicka-lica']
      //         },
      //         {
      //           label: 'Porezne stope',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/parametri/porezne-stope']
      //         },
      //         {
      //           label: 'Porez na potrošnju',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/parametri/porez-na-potrosnju']
      //         },
      //         {
      //           label: 'Napomene',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/parametri/napomene']
      //         },
      //         {
      //           label: 'Države',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/parametri/drzave']
      //         },
      //         {
      //           label: 'Banke',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/parametri/banke']
      //         },
      //         {
      //           label: 'Vrste plaćanja',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/parametri/vrste-placanja']
      //         }
      //       ]
      //     },
      //     {
      //       label: 'DINAMIČKI MENI',
      //       icon: 'pi pi-fw pi-user',
      //       items: [
      //         {
      //           label: 'Maloprodajna kalkulacija',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/obrada/maloprodajna-kalkulacija']
      //         },
      //         {
      //           label: 'Veleprodajna kalkulacija',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Ulaz materijala',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Izlazna faktura',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Izvozna faktura',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Avansni račun',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Nefakturisani računi',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Predračun',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Otpremnica',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Iventura',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Početno stanje',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Inventurna razlika',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Otpis robe',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Prenos robe',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Povrat robe',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Normativi (postavke parametara)',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Poluproizvodi (postavke parametara)',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Maloprodajna nivelacija',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Veleprodajna nivelacija',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Pregled maloprodajnih računa',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Knjižno odobrenje',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Proizvodni process',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Proizvodni proces – POLUPROIZVOD',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Radni nalog',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/radni']
      //         },
      //         {
      //           label: 'Nalog za knjiženje',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //       ]
      //     },
      //     {
      //       label: 'IZVJEŠTAJI',
      //       icon: 'pi pi-fw pi-user',
      //       items: [
      //         {
      //           label: 'Izvještaji sa kasa',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Stanje skaladišta',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Kartica artikla',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Rekapitulacija',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Dugovanja I potraživanja',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Kartica Kupca/Dobavljača',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Uporedjivanje perioda',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Statistika artikala',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Pregled artikala Kupaca',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Pregled nabavke',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Pregled proizvodnje',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Pregled utroška materijala',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Trgovačka knjiga na malo',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Trgovačka knjiga na veliko',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Poslovna knjiga ugostitelja',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Knjiga usluga',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Knjiga šanka',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Dnevni list kuhinje',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //       ]
      //     },
      //     {
      //       label: 'PDV',
      //       icon: 'pi pi-fw pi-user',
      //       items: [
      //         {
      //           label: 'KUF',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'KIF',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Troškovi',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'PDV prijava',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Export',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },

      //       ]
      //     },
      //     {
      //       label: 'RECEPCIJA',
      //       icon: 'pi pi-fw pi-user',
      //       items: [
      //         {
      //           label: 'Tip sobe',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Sobe',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Programi',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Gosti',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Rezervacije',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Ostalo 1',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Ostalo 2',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Ostalo 3',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },

      //       ]
      //     },
      //     {
      //       label: 'BLAGAJNA',
      //       icon: 'pi pi-fw pi-user',
      //       items: [
      //         {
      //           label: 'Nalog za naplatu',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Nalog za isplatu',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Nalog razduženja',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Blagajnički dnevnik',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //       ]
      //     },
      //     {
      //       label: 'FINANSIJSKO POSLOVANJE',
      //       icon: 'pi pi-fw pi-user',
      //       items: [
      //         {
      //           label: 'Kontni plan',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Šema knjiženja',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Predlog za kompenzaciju',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'IOS – izvod otvorenih stavki',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Kartice konta',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Dnevnik knjiženja',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Specifikacije kupca',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Specifikacije dobavljača',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Specifikacija prihoda',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Specifikacija rashoda',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Zaključni list',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Zaključna knjiženja',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Nalog početnog stanja',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Specifikacija osnovnih sredstava',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Glavna knjiga',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //       ]
      //     },
      //     {
      //       label: 'OBRASCI ZA ZAVRŠNI RAČUN',
      //       icon: 'pi pi-fw pi-user',
      //       items: [
      //         {
      //           label: 'Bilans stanja',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Bilans uspjeha',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Bilans tokova gotovine',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Izvještaj o promjenama u kapitalu',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Statistički aneks',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },
      //         {
      //           label: 'Izvještaj o ostalim dobicima I gubitcima',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login']
      //         },

      //       ]
      //     },

      //   ]
      // },





/*



*/


      // {
      //     label: 'Home',
      //     items: [
      //         { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
      //     ]
      // },
      // {
      //     label: 'UI Components',
      //     items: [
      //         { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
      //         { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
      //         { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
      //         { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
      //         { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
      //         { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
      //         { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
      //         { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
      //         { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
      //         { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
      //         { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
      //         { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
      //         { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
      //         { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
      //         { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
      //         { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
      //     ]
      // },
      // {
      //     label: 'Prime Blocks',
      //     items: [
      //         { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
      //         { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
      //     ]
      // },
      // {
      //     label: 'Utilities',
      //     items: [
      //         { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
      //         { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
      //     ]
      // },
      // {
      //     label: 'Pages',
      //     icon: 'pi pi-fw pi-briefcase',
      //     items: [
      //         {
      //             label: 'Landing',
      //             icon: 'pi pi-fw pi-globe',
      //             routerLink: ['/landing']
      //         },
      //         {
      //             label: 'Auth',
      //             icon: 'pi pi-fw pi-user',
      //             items: [
      //                 {
      //                     label: 'Login',
      //                     icon: 'pi pi-fw pi-sign-in',
      //                     routerLink: ['/auth/login']
      //                 },
      //                 {
      //                     label: 'Error',
      //                     icon: 'pi pi-fw pi-times-circle',
      //                     routerLink: ['/auth/error']
      //                 },
      //                 {
      //                     label: 'Access Denied',
      //                     icon: 'pi pi-fw pi-lock',
      //                     routerLink: ['/auth/access']
      //                 }
      //             ]
      //         },
      //         {
      //             label: 'Crud',
      //             icon: 'pi pi-fw pi-pencil',
      //             routerLink: ['/pages/crud']
      //         },
      //         {
      //             label: 'Timeline',
      //             icon: 'pi pi-fw pi-calendar',
      //             routerLink: ['/pages/timeline']
      //         },
      //         {
      //             label: 'Not Found',
      //             icon: 'pi pi-fw pi-exclamation-circle',
      //             routerLink: ['/notfound']
      //         },
      //         {
      //             label: 'Empty',
      //             icon: 'pi pi-fw pi-circle-off',
      //             routerLink: ['/pages/empty']
      //         },
      //     ]
      // },
      // {
      //     label: 'Hierarchy',
      //     items: [
      //         {
      //             label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
      //             items: [
      //                 {
      //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
      //                     items: [
      //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
      //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
      //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
      //                     ]
      //                 },
      //                 {
      //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
      //                     items: [
      //                         { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
      //                     ]
      //                 },
      //             ]
      //         },
      //         {
      //             label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
      //             items: [
      //                 {
      //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
      //                     items: [
      //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
      //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
      //                     ]
      //                 },
      //                 {
      //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
      //                     items: [
      //                         { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
      //                     ]
      //                 },
      //             ]
      //         }
      //     ]
      // },
      // {
      //     label: 'Get Started',
      //     items: [
      //         {
      //             label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
      //         },
      //         {
      //             label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
      //         }
      //     ]
      // }
    //];
  }
}
