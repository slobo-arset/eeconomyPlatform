const companyWorkspaceItems = [
  { label: 'Početna', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
  {
    label: 'Obračuni',
    icon: 'pi pi-fw pi-calculator',
    items: [
      { label: 'Obračun prihoda iz radnog odnosa', icon: 'pi pi-fw pi-calculator', routerLink: ['/obračuni/obračun-prihoda-iz-radnog-odnosa'] },
      { label: 'Naknada zarade', icon: 'pi pi-fw pi-calculator', routerLink: ['/obračuni/naknada-zarade'] },
      { label: 'Naknada troškova zaposlenom', icon: 'pi pi-fw pi-calculator', routerLink: ['/obračuni/naknada-troškova-zaposlenom'] },
      { label: 'Druga primanja zaposlenih', icon: 'pi pi-fw pi-calculator', routerLink: ['/obračuni/druga-primanja-zaposlenih'] },
      { label: 'Ugovorene naknade za PP poslove', icon: 'pi pi-fw pi-calculator', routerLink: ['/obračuni/ugovorene-naknade-za-pp-poslove'] },
      { label: 'Obračun prihoda van radnog odnosa', icon: 'pi pi-fw pi-calculator', routerLink: ['/obračuni/obračun-prihoda-van-radnog-odnosa'] },
      { label: 'Obračun drugih prihoda van radnog odnosa', icon: 'pi pi-fw pi-calculator', routerLink: ['/obračuni/obračun-drugih-prihoda-van-radnog-odnosa'] },
      { label: 'Naknada licima koja nisu zaposlena', icon: 'pi pi-fw pi-calculator', routerLink: ['/obračuni/naknada-licima-koja-nisu-zaposlena'] }
    ]
  },
  {
    label: 'e-Fakture',
    icon: 'pi pi-fw pi-user',
    items: [
      { label: 'KPR', icon: 'pi pi-fw pi-sign-in', routerLink: ['/e-fakture/ulazne'] },
      { label: 'Generisanje plaćanja', icon: 'pi pi-fw pi-file-export', routerLink: ['/e-fakture/generisanje-plaćanja'] },
      { label: 'Podešavanje API', icon: 'pi pi-fw pi-file-export', routerLink: ['/e-fakture/podesavanje'] }
    ]
  },
  {
    label: 'Edukator',
    icon: 'pi pi-fw pi-play',
    items: [
      { label: 'Edukator - SPIRI', icon: 'pi pi-fw pi-play', routerLink: ['/obuka/obuka/1/spiri'] },
      { label: 'Edukator - FUK', icon: 'pi pi-fw pi-play', routerLink: ['/obuka/obuka/2/fuk'] },
      { label: 'Edukator - šeme knjiženja', icon: 'pi pi-fw pi-play', routerLink: ['/obuka/obuka/3/šeme-knjiženja'] }
    ]
  },
  {
    label: 'Šifarnici',
    icon: 'pi pi-fw pi-book',
    items: [
      { label: 'Ekonomska klasifikacija', icon: 'pi pi-fw pi-file', routerLink: ['/šifarnici/ekonomska-klasifikacija'] },
      { label: 'Izvori finansiranja', icon: 'pi pi-fw pi-file', routerLink: ['/šifarnici/izvor-finansiranja'] },
      { label: 'Konto knjiženja', icon: 'pi pi-fw pi-file', routerLink: ['/šifarnici/konto-knjizenja'] },
      { label: 'Šifra programa', icon: 'pi pi-fw pi-file', routerLink: ['/šifarnici/sifra-programa'] },
      { label: 'Šifra projekta', icon: 'pi pi-fw pi-file', routerLink: ['/šifarnici/sifra-projekta'] }
    ]
  },
  {
    label: 'FUK – Šifarnici',
    icon: 'pi pi-fw pi-book',
    items: [
      { label: 'Organizacione jedinice', icon: 'pi pi-fw pi-sitemap', routerLink: ['/fuk/sifarnici/organizacione-jedinice'] },
      { label: 'Hijerarhija OJ', icon: 'pi pi-fw pi-sort-amount-down', routerLink: ['/fuk/sifarnici/hijerarhija-oj'] },
      { label: 'Poslovni procesi', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/poslovni-procesi'] },
      { label: 'Poslovne procedure', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/poslovne-procedure'] },
      { label: 'Radna mesta', icon: 'pi pi-fw pi-id-card', routerLink: ['/fuk/sifarnici/radna-mesta'] },
      { label: 'Status lica', icon: 'pi pi-fw pi-user', routerLink: ['/fuk/sifarnici/status-lica'] },
      {
        label: 'Atributi procesa',
        icon: 'pi pi-fw pi-list',
        items: [
          { label: 'Cilj', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/atribut-cilj'] },
          { label: 'Dokumenta', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/atribut-dokumenta'] },
          { label: 'Aktivnosti', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/atribut-aktivnosti'] },
          { label: 'Rezultati', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/atribut-rezultati'] },
          { label: 'Materijalni resursi', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/atribut-materijalni-resursi'] },
          { label: 'Ljudski resursi', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/atribut-ljudski-resursi'] }
        ]
      },
      {
        label: 'Klasifikacija nepravilnosti',
        icon: 'pi pi-fw pi-exclamation-triangle',
        items: [
          { label: 'Vrsta uticaja', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/nepravnost-vrsta-uticaja'] },
          { label: 'Priroda', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/nepravnost-priroda'] },
          { label: 'Oblast', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/nepravnost-oblast'] }
        ]
      },
      {
        label: 'Registar rizika — pomoćni',
        icon: 'pi pi-fw pi-chart-line',
        items: [
          { label: 'Opis rizika', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/rizik-opis'] },
          { label: 'Kontrolna aktivnost', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/rizik-kontrolna-aktivnost'] },
          { label: 'Rok izvršenja', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/rizik-rok-izvrsenja'] }
        ]
      }
    ]
  },
  {
    label: 'QMS – Šifarnici',
    icon: 'pi pi-fw pi-book',
    items: [
      { label: 'Proces dobavljača', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/qms-proces-dobavljaca'] },
      { label: 'Zainteresovana strana', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/qms-zainteresovana-strana'] },
      { label: 'Faktor okruženja', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/qms-faktor-okruzenja'] },
      { label: 'Proces korisnika', icon: 'pi pi-fw pi-file', routerLink: ['/fuk/sifarnici/qms-proces-korisnika'] }
    ]
  },
  {
    label: 'FUK',
    icon: 'pi pi-fw pi-briefcase',
    items: [
      { label: 'Akcioni plan', icon: 'pi pi-fw pi-check-square', routerLink: ['/fuk/akcioni-plan'] },
      { label: 'Mapa poslovnih procesa', icon: 'pi pi-fw pi-map', routerLink: ['/fuk/mapa-procesa'] },
      { label: 'Registar rizika', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/fuk/registar-rizika'] },
      {
        label: 'Evidencija aktivnosti',
        icon: 'pi pi-fw pi-calendar',
        items: [
          { label: 'Evidencija sastanaka', icon: 'pi pi-fw pi-users', routerLink: ['/fuk/evidencija-aktivnosti'], queryParams: { tip: 'sastanak' } },
          { label: 'Evidencija ostalih aktivnosti', icon: 'pi pi-fw pi-list', routerLink: ['/fuk/evidencija-aktivnosti'], queryParams: { tip: 'ostalo' } }
        ]
      },
      {
        label: 'Evidencija nepravilnosti',
        icon: 'pi pi-fw pi-exclamation-circle',
        items: [
          { label: 'Evidencija detaljna', icon: 'pi pi-fw pi-table', routerLink: ['/fuk/nepravnost'] },
          { label: 'Evidencija objedinjena', icon: 'pi pi-fw pi-th-large', routerLink: ['/fuk/nepravnost'] }
        ]
      },
      { label: 'Ovlašćenja', icon: 'pi pi-fw pi-key', routerLink: ['/fuk/ovlascenja'] }
    ]
  },
  {
    label: 'QMS',
    icon: 'pi pi-fw pi-verified',
    items: [
      { label: 'Kartoni poslovnih procesa', icon: 'pi pi-fw pi-id-card', routerLink: ['/fuk/qms-karton'] }
    ]
  },
  {
    label: 'e-Rokovi',
    icon: 'pi pi-fw pi-calendar',
    items: [
      { label: 'Poreski rokovi', icon: 'pi pi-fw pi-calendar', routerLink: ['/info/e-rokovi/poreski-rokovi'] },
      { label: 'Budžetski rokovi', icon: 'pi pi-fw pi-calendar', routerLink: ['/info/e-rokovi/budzetski-rokovi'] }
    ]
  },
  {
    label: 'e-Informator',
    icon: 'pi pi-fw pi-calendar-minus',
    items: [
      { label: 'e-Informator', icon: 'pi pi-fw pi-calendar-minus', routerLink: ['/info/e-informator'] }
    ]
  },
  { label: 'Zaposleni', icon: 'pi pi-fw pi-users', routerLink: ['/employees'] }
];

export const buildAdminMenu = () => [
  {
    label: 'MENI',
    items: [
      { label: 'Početna', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
    ]
  },
  {
    label: 'ADMINISTRACIJA',
    items: [
      { label: 'Korisnici', icon: 'pi pi-fw pi-users', routerLink: ['/users'] },
      { label: 'Kompanije', icon: 'pi pi-fw pi-building', routerLink: ['/users'] },
      { label: 'Pretplate', icon: 'pi pi-fw pi-euro', routerLink: ['/subscription'] },
      { label: 'Zaposleni', icon: 'pi pi-fw pi-users', routerLink: ['/employees'] },
      { label: 'Log lista', icon: 'pi pi-fw pi-list', routerLink: ['/log-lista'] }
    ]
  },
  {
    label: 'Edukator',
    icon: 'pi pi-fw pi-play',
    items: [
      { label: 'Edukator - SPIRI', icon: 'pi pi-fw pi-youtube', routerLink: ['/obuka/obuka/admin/1/spiri'] },
      { label: 'Edukator - FUK', icon: 'pi pi-fw pi-youtube', routerLink: ['/obuka/obuka/admin/2/fuk'] },
      { label: 'Edukator - šeme knjiženja', icon: 'pi pi-fw pi-youtube', routerLink: ['/obuka/obuka/admin/3/šeme-knjiženja'] },
      { label: 'Teme', icon: 'pi pi-fw pi-file', routerLink: ['/šifarnici/teme'] }
    ]
  },
  {
    label: 'e-Informator',
    items: [
      { label: 'e-Informator', icon: 'pi pi-fw pi-calendar-minus', routerLink: ['/info/e-informator'] }
    ]
  },
  {
    label: 'e-Rokovi',
    items: [
      { label: 'Poreski rokovi', icon: 'pi pi-fw pi-calendar', routerLink: ['/info/e-rokovi/poreski-rokovi'] },
      { label: 'Budžetski rokovi', icon: 'pi pi-fw pi-calendar', routerLink: ['/info/e-rokovi/budzetski-rokovi'] },
      { label: 'Vrste poreske prijave', icon: 'pi pi-fw pi-book', routerLink: ['/info/e-rokovi/vrste-prijave'] }
    ]
  }
];

export const buildCompanyMenu = (showCompanyAdmin: boolean) => {
  const model: any[] = [];

  if (showCompanyAdmin) {
    model.push({
      label: 'ADMINISTRACIJA KOMPANIJE',
      items: [
        { label: 'Kompanije', icon: 'pi pi-fw pi-building', routerLink: ['/users'] },
        { label: 'Korisnici', icon: 'pi pi-fw pi-users', routerLink: ['/employees'] },
        { label: 'Zaposleni', icon: 'pi pi-fw pi-users', routerLink: ['/employees'] }
      ]
    });
  }

  model.push({
    label: 'MENI',
    items: companyWorkspaceItems
  });

  return model;
};
