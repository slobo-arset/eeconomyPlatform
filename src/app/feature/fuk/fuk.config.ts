export type FukFieldType = 'text' | 'textarea' | 'number' | 'date' | 'dropdown' | 'switch' | 'computed';

export interface FukField {
  key: string;
  label: string;
  type: FukFieldType;
  required?: boolean;
  options?: { label: string; value: any }[];
  sifarnikRoute?: string;
  optionLabel?: string;
  optionValue?: string;
  min?: number;
  max?: number;
  readonly?: boolean;
}

export interface FukColumn {
  field: string;
  header: string;
  filter?: 'text' | 'boolean' | 'none';
}

export interface FukScreenConfig {
  key: string;
  label: string;
  route: string;
  manage?: boolean;
  showFilterRow?: boolean;
  columns: FukColumn[];
  fields: FukField[];
}

export const GENERIC_SIFARNIK_CONFIG: Record<string, FukScreenConfig> = {
  'poslovni-procesi': {
    key: 'poslovni-procesi',
    label: 'Poslovni procesi',
    route: 'poslovni-procesi',
    manage: true,
    columns: [
      { field: 'sifra', header: 'Šifra', filter: 'text' },
      { field: 'naziv', header: 'Naziv', filter: 'text' },
      { field: 'is_active', header: 'Validan', filter: 'boolean' },
      { field: 'datum_unosa', header: 'Datum unosa', filter: 'text' },
      { field: 'datum_prestanka', header: 'Datum prestanka važenja', filter: 'text' }
    ],
    fields: [
      { key: 'sifra', label: 'Šifra', type: 'text', required: true },
      { key: 'naziv', label: 'Naziv', type: 'textarea', required: true },
      { key: 'is_active', label: 'Aktivan / neaktivan', type: 'dropdown', required: true, options: aktivnostOptions() },
      { key: 'datum_unosa', label: 'Datum unosa procesa', type: 'date', required: true },
      { key: 'datum_prestanka', label: 'Datum prestanka važenja procesa', type: 'date' }
    ]
  },
  'poslovne-procedure': sifarnik('poslovne-procedure', 'Poslovne procedure'),
  'radna-mesta': sifarnik('radna-mesta', 'Radna mesta', true),
  'status-lica': sifarnik('status-lica', 'Status lica'),
  'atribut-cilj': sifarnik('atribut-cilj', 'Cilj poslovnog procesa', false, true),
  'atribut-dokumenta': sifarnik('atribut-dokumenta', 'Dokumenta poslovnog procesa', false, true),
  'atribut-aktivnosti': sifarnik('atribut-aktivnosti', 'Aktivnosti poslovnog procesa', false, true),
  'atribut-rezultati': sifarnik('atribut-rezultati', 'Rezultati poslovnog procesa', false, true),
  'atribut-materijalni-resursi': sifarnik('atribut-materijalni-resursi', 'Materijalni resursi', false, true),
  'atribut-ljudski-resursi': sifarnik('atribut-ljudski-resursi', 'Ljudski resursi', false, true),
  'nepravnost-vrsta-uticaja': sifarnik('nepravnost-vrsta-uticaja', 'Nepravilnosti po vrsti uticaja'),
  'nepravnost-priroda': sifarnik('nepravnost-priroda', 'Nepravilnosti po prirodi'),
  'nepravnost-oblast': sifarnik('nepravnost-oblast', 'Nepravilnosti po oblasti'),
  'rizik-opis': sifarnik('rizik-opis', 'Opis rizika'),
  'rizik-kontrolna-aktivnost': sifarnik('rizik-kontrolna-aktivnost', 'Kontrolna aktivnost'),
  'rizik-rok-izvrsenja': sifarnik('rizik-rok-izvrsenja', 'Rok za izvršenje'),
  'qms-proces-dobavljaca': sifarnik('qms-proces-dobavljaca', 'Proces dobavljača'),
  'qms-zainteresovana-strana': sifarnik('qms-zainteresovana-strana', 'Zainteresovana strana'),
  'qms-faktor-okruzenja': sifarnik('qms-faktor-okruzenja', 'Faktor okruženja'),
  'qms-proces-korisnika': sifarnik('qms-proces-korisnika', 'Proces korisnika')
};

export const OJ_NIVOI = [
  { label: 'I nivo – Entitet', value: 1 },
  { label: 'II nivo – Sektor', value: 2 },
  { label: 'III nivo – Odeljenje', value: 3 },
  { label: 'IV nivo – Služba', value: 4 },
  { label: 'V nivo – Odsek', value: 5 },
  { label: 'VI nivo – Grupa', value: 6 }
];

export const SPECIAL_SIFARNIK_CONFIG: Record<string, FukScreenConfig> = {
  'organizacione-jedinice': {
    key: 'organizacione-jedinice',
    label: 'Organizacione jedinice',
    route: 'organizacione-jedinice',
    manage: true,
    showFilterRow: true,
    columns: [
      { field: 'sifra', header: 'Šifra', filter: 'text' },
      { field: 'naziv', header: 'Naziv', filter: 'text' },
      { field: 'nivo_label', header: 'Nivo', filter: 'text' },
      { field: 'parent_naziv', header: 'Nadređena OJ', filter: 'text' },
      { field: 'is_active', header: 'Validan', filter: 'boolean' }
    ],
    fields: [
      { key: 'sifra', label: 'Šifra', type: 'text', required: true },
      { key: 'naziv', label: 'Naziv', type: 'text', required: true },
      { key: 'nivo', label: 'Nivo hijerarhije', type: 'dropdown', required: true, options: OJ_NIVOI },
      { key: 'parent_id', label: 'Nadređena organizaciona jedinica', type: 'dropdown', sifarnikRoute: 'organizacione-jedinice', optionLabel: 'pun_naziv', optionValue: 'id' },
      { key: 'is_active', label: 'Aktivan', type: 'switch' }
    ]
  },
  'hijerarhija-oj': {
    key: 'hijerarhija-oj',
    label: 'Hijerarhija OJ',
    route: 'hijerarhija-oj',
    manage: true,
    showFilterRow: true,
    columns: [
      { field: 'sifra', header: 'Šifra', filter: 'text' },
      { field: 'naziv', header: 'Naziv', filter: 'text' },
      { field: 'oj_naziv', header: 'Organizaciona jedinica', filter: 'text' },
      { field: 'is_active', header: 'Validan', filter: 'boolean' }
    ],
    fields: [
      { key: 'sifra', label: 'Šifra', type: 'text', required: true },
      { key: 'naziv', label: 'Naziv', type: 'text', required: true },
      { key: 'organizaciona_jedinica_id', label: 'Organizaciona jedinica', type: 'dropdown', required: true, sifarnikRoute: 'organizacione-jedinice', optionLabel: 'pun_naziv', optionValue: 'id' },
      { key: 'is_active', label: 'Aktivan', type: 'switch' }
    ]
  }
};

export const ENTITY_CONFIG: Record<string, FukScreenConfig> = {
  'akcioni-plan': {
    key: 'akcioni-plan',
    label: 'Akcioni plan',
    route: 'akcioni-plan',
    columns: [
      { field: 'redni_broj', header: 'Redni broj' },
      { field: 'proces_implementacije', header: 'Procesi implementacije FUK' },
      { field: 'akcije', header: 'Akcije' },
      { field: 'odgovorna_osoba', header: 'Odgovorna osoba' },
      { field: 'planiran_datum_zavrsetka', header: 'Planiran datum završetka' },
      { field: 'datum_zavrsetka', header: 'Datum završetka' }
    ],
    fields: [
      { key: 'redni_broj', label: 'Redni broj', type: 'number', required: true, min: 1 },
      { key: 'proces_implementacije', label: 'Procesi implementacije FUK', type: 'text', required: true },
      { key: 'akcije', label: 'Akcije', type: 'textarea', required: true },
      { key: 'odgovorna_osoba', label: 'Odgovorna osoba', type: 'text', required: true },
      { key: 'planiran_datum_zavrsetka', label: 'Planiran datum završetka', type: 'date' },
      { key: 'datum_zavrsetka', label: 'Stvarni datum završetka', type: 'date' }
    ]
  },
  'mapa-procesa': {
    key: 'mapa-procesa',
    label: 'Mapa poslovnih procesa',
    route: 'mapa-procesa',
    columns: [
      { field: 'sifra', header: 'Šifra' },
      { field: 'naziv', header: 'Naziv poslovnog procesa' },
      { field: 'cilj', header: 'Cilj' },
      { field: 'odgovorno_lice', header: 'Odgovorno lice' }
    ],
    fields: [
      { key: 'sifra', label: 'Šifra poslovnog procesa', type: 'text', required: true },
      { key: 'naziv', label: 'Naziv poslovnog procesa', type: 'text', required: true },
      { key: 'organizaciona_jedinica_id', label: 'Organizaciona jedinica', type: 'dropdown', sifarnikRoute: 'organizacione-jedinice', optionLabel: 'pun_naziv', optionValue: 'id' },
      { key: 'cilj', label: 'Cilj poslovnog procesa', type: 'dropdown', sifarnikRoute: 'atribut-cilj' },
      { key: 'opis', label: 'Opis / kratak opis procesa', type: 'textarea' },
      { key: 'dokumenta', label: 'Dokumenta', type: 'dropdown', sifarnikRoute: 'atribut-dokumenta' },
      { key: 'aktivnosti', label: 'Aktivnosti', type: 'dropdown', sifarnikRoute: 'atribut-aktivnosti' },
      { key: 'rezultati', label: 'Rezultati', type: 'dropdown', sifarnikRoute: 'atribut-rezultati' },
      { key: 'materijalni_resursi', label: 'Materijalni resursi', type: 'dropdown', sifarnikRoute: 'atribut-materijalni-resursi' },
      { key: 'ljudski_resursi', label: 'Ljudski resursi', type: 'dropdown', sifarnikRoute: 'atribut-ljudski-resursi' },
      { key: 'poslovna_procedura_id', label: 'Poslovna procedura', type: 'dropdown', sifarnikRoute: 'poslovne-procedure' },
      { key: 'rukovodilac_oj', label: 'Ime i prezime rukovodioca OJ', type: 'text' },
      { key: 'odgovorno_lice', label: 'Odgovorno lice poslovnog procesa', type: 'text' }
    ]
  },
  'registar-rizika': {
    key: 'registar-rizika',
    label: 'Registar rizika',
    route: 'registar-rizika',
    columns: [
      { field: 'redni_broj', header: 'R.br.' },
      { field: 'opis_rizika', header: 'Opis rizika' },
      { field: 'uticaj', header: 'Uticaj' },
      { field: 'verovatnoca', header: 'Verovatnoća' },
      { field: 'rangiranje', header: 'Rangiranje' },
      { field: 'nosilac_rizika', header: 'Nosilac rizika' }
    ],
    fields: [
      { key: 'poslovni_proces_id', label: 'Poslovni proces', type: 'dropdown', sifarnikRoute: 'poslovni-procesi', optionLabel: 'naziv', optionValue: 'id', required: true },
      { key: 'rizik_opis_id', label: 'Opis rizika', type: 'dropdown', sifarnikRoute: 'rizik-opis', optionValue: 'id', required: true },
      { key: 'uticaj', label: 'Uticaj (1–3)', type: 'number', required: true, min: 1, max: 3 },
      { key: 'verovatnoca', label: 'Verovatnoća (1–3)', type: 'number', required: true, min: 1, max: 3 },
      { key: 'rangiranje', label: 'Rangiranje (uticaj × verovatnoća)', type: 'computed', readonly: true },
      { key: 'kontrolna_aktivnost_id', label: 'Kontrolna aktivnost', type: 'dropdown', sifarnikRoute: 'rizik-kontrolna-aktivnost', optionValue: 'id' },
      { key: 'nosilac_rizika_oj_id', label: 'Nosilac rizika (OJ)', type: 'dropdown', sifarnikRoute: 'organizacione-jedinice', optionLabel: 'pun_naziv', optionValue: 'id' },
      { key: 'rok_izvrsenja_id', label: 'Rok za izvršenje', type: 'dropdown', sifarnikRoute: 'rizik-rok-izvrsenja', optionValue: 'id' }
    ]
  },
  'evidencija-aktivnosti': {
    key: 'evidencija-aktivnosti',
    label: 'Evidencija aktivnosti',
    route: 'evidencija-aktivnosti',
    columns: [
      { field: 'redni_broj', header: 'R.br.' },
      { field: 'tip', header: 'Tip' },
      { field: 'opis', header: 'Opis aktivnosti' },
      { field: 'datum', header: 'Datum' }
    ],
    fields: [
      { key: 'tip', label: 'Tip evidencije', type: 'dropdown', required: true, options: [
        { label: 'Sastanak', value: 'sastanak' },
        { label: 'Ostalo', value: 'ostalo' }
      ]},
      { key: 'datum', label: 'Datum', type: 'date', required: true },
      { key: 'opis', label: 'Opis aktivnosti', type: 'textarea', required: true },
      { key: 'organizaciona_jedinica_id', label: 'Organizaciona jedinica', type: 'dropdown', sifarnikRoute: 'organizacione-jedinice', optionLabel: 'pun_naziv', optionValue: 'id' }
    ]
  },
  'nepravnost': {
    key: 'nepravnost',
    label: 'Evidencija nepravilnosti',
    route: 'nepravnost',
    columns: [
      { field: 'redni_broj', header: 'R.br.' },
      { field: 'kratak_opis', header: 'Kratak opis' },
      { field: 'mesto', header: 'Mesto' },
      { field: 'konacno_utvrdjena', header: 'Konačno utvrđena' }
    ],
    fields: [
      { key: 'organizaciona_jedinica_id', label: 'Organizaciona jedinica gde je uočena nepravilnost', type: 'dropdown', sifarnikRoute: 'organizacione-jedinice', optionLabel: 'pun_naziv', optionValue: 'id', required: true },
      { key: 'radno_mesto_id', label: 'Radno mesto vezano za OJ', type: 'dropdown', sifarnikRoute: 'radna-mesta' },
      { key: 'poslovni_proces_id', label: 'Poslovni proces u kome je uočena nepravilnost', type: 'dropdown', sifarnikRoute: 'poslovni-procesi' },
      { key: 'lice_prijem', label: 'Ime i prezime lica zaduženog za prijem sumnje', type: 'text' },
      { key: 'mesto', label: 'Mesto', type: 'text' },
      { key: 'kratak_opis', label: 'Kratak opis sumnje na nepravilnost', type: 'textarea', required: true },
      { key: 'dokazi', label: 'Navodjenje priloženih dokaza', type: 'textarea' },
      { key: 'radno_mesto_uocio', label: 'Radno mesto lica koje je uočilo nepravilnost', type: 'dropdown', sifarnikRoute: 'radna-mesta' },
      { key: 'ime_prezime_uocio', label: 'Ime i prezime lica koje je uočilo nepravilnost', type: 'text' },
      { key: 'odluka_postupanje', label: 'Odluka o daljem postupanju', type: 'textarea' },
      { key: 'krsenje_ljudskih_prava', label: 'Elementi kršenja ljudskih prava', type: 'dropdown', options: yesNo() },
      { key: 'krsenje_javnih_ovlascenja', label: 'Elementi kršenja javnih ovlašćenja', type: 'dropdown', options: yesNo() },
      { key: 'opasnost_javno_zdravlje', label: 'Elementi opasnosti po javno zdravlje', type: 'dropdown', options: yesNo() },
      { key: 'steta_velikih_razmera', label: 'Elementi štete velikih razmera', type: 'dropdown', options: yesNo() },
      { key: 'razresivo_u_delokrugu', label: 'Može da se razreši u delokrugu rada', type: 'dropdown', options: yesNo() },
      { key: 'konacno_utvrdjena', label: 'Konačno utvrđena nepravilnost', type: 'textarea' },
      { key: 'vrsta_uticaja_id', label: 'Nepravilnost po vrsti uticaja', type: 'dropdown', sifarnikRoute: 'nepravnost-vrsta-uticaja' },
      { key: 'priroda_id', label: 'Nepravilnost po prirodi', type: 'dropdown', sifarnikRoute: 'nepravnost-priroda' },
      { key: 'oblast_id', label: 'Nepravilnost po oblasti', type: 'dropdown', sifarnikRoute: 'nepravnost-oblast' },
      { key: 'aktivnost_umanjenje', label: 'Aktivnost za umanjenje rizika', type: 'textarea' },
      { key: 'mera_otklanjanje', label: 'Mera za otklanjanje posledica', type: 'textarea' },
      { key: 'rok_otklanjanje', label: 'Rok za otklanjanje uzroka', type: 'date' }
    ]
  },
  'ovlascenja': {
    key: 'ovlascenja',
    label: 'Ovlašćenja',
    route: 'ovlascenja',
    columns: [
      { field: 'ime', header: 'Ime' },
      { field: 'prezime', header: 'Prezime' },
      { field: 'evidencioni_broj', header: 'Evidencioni broj' },
      { field: 'role_priprema', header: 'Priprema' },
      { field: 'role_overava', header: 'Overava' },
      { field: 'role_kontrolise', header: 'Kontroliše' }
    ],
    fields: [
      { key: 'ime', label: 'Ime', type: 'text', required: true },
      { key: 'prezime', label: 'Prezime', type: 'text', required: true },
      { key: 'evidencioni_broj', label: 'Evidencioni broj lica', type: 'text' },
      { key: 'status_lica_id', label: 'Status lica', type: 'dropdown', sifarnikRoute: 'status-lica', optionValue: 'id' },
      { key: 'radno_mesto_id', label: 'Naziv radnog mesta', type: 'dropdown', sifarnikRoute: 'radna-mesta', optionValue: 'id' },
      { key: 'organizaciona_jedinica_id', label: 'Naziv OJ', type: 'dropdown', sifarnikRoute: 'organizacione-jedinice', optionLabel: 'pun_naziv', optionValue: 'id' },
      { key: 'role_priprema', label: 'Priprema', type: 'switch' },
      { key: 'role_overava', label: 'Overava', type: 'switch' },
      { key: 'role_kontrolise', label: 'Kontroliše', type: 'switch' }
    ]
  },
  'qms-karton': {
    key: 'qms-karton',
    label: 'Kartoni poslovnih procesa',
    route: 'qms-karton',
    columns: [
      { field: 'naziv', header: 'Naziv' },
      { field: 'opis', header: 'Opis' }
    ],
    fields: [
      { key: 'naziv', label: 'Naziv kartona', type: 'text', required: true },
      { key: 'poslovni_proces_id', label: 'Poslovni proces', type: 'dropdown', sifarnikRoute: 'poslovni-procesi' },
      { key: 'faktor_okruzenja_id', label: 'Faktor okruženja', type: 'dropdown', sifarnikRoute: 'qms-faktor-okruzenja' },
      { key: 'proces_dobavljaca_id', label: 'Proces dobavljača', type: 'dropdown', sifarnikRoute: 'qms-proces-dobavljaca' },
      { key: 'zainteresovana_strana_id', label: 'Zainteresovana strana', type: 'dropdown', sifarnikRoute: 'qms-zainteresovana-strana' },
      { key: 'proces_korisnika_id', label: 'Proces korisnika', type: 'dropdown', sifarnikRoute: 'qms-proces-korisnika' },
      { key: 'opis', label: 'Opis', type: 'textarea' }
    ]
  }
};

function sifarnik(route: string, label: string, withOpis = false, longNaziv = false): FukScreenConfig {
  const fields: FukField[] = [
    { key: 'sifra', label: 'Šifra', type: 'text', required: true },
    { key: 'naziv', label: 'Naziv', type: longNaziv ? 'textarea' : 'text', required: true }
  ];
  if (withOpis) {
    fields.push({ key: 'opis', label: 'Opis', type: 'textarea' });
  }
  fields.push({ key: 'is_active', label: 'Validan (aktivan / neaktivan)', type: 'dropdown', options: aktivnostOptions() });

  return {
    key: route,
    label,
    route,
    manage: true,
    columns: [
      { field: 'sifra', header: 'Šifra', filter: 'text' },
      { field: 'naziv', header: 'Naziv', filter: 'text' },
      ...(withOpis ? [{ field: 'opis', header: 'Opis', filter: 'text' as const }] : []),
      { field: 'is_active', header: 'Validan', filter: 'boolean' }
    ],
    fields
  };
}

function aktivnostOptions() {
  return [
    { label: 'Aktivan', value: 1 },
    { label: 'Neaktivan', value: 0 }
  ];
}

function yesNo() {
  return [
    { label: 'DA', value: 'DA' },
    { label: 'NE', value: 'NE' }
  ];
}
