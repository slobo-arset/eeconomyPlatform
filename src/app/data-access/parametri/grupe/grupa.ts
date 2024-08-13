import {PorezNaPotrosnjuRef} from "../porez-na-potrosnju/porez-na-potosnju";
import {PorezRef} from "../porezne-stope/porez";
import {Vrsta} from "../vrste/vrsta";

export interface GrupaArtikla {
  id: number,
  naziv: string,
  porezNaPotrosnju: PorezNaPotrosnjuRef
  porez: PorezRef,
  vrsta: Vrsta,
  pos: boolean,
  napomena: boolean,
  uticeNaSkladiste: boolean,
  default: boolean,
  sank: boolean,
  kuhinja: boolean,
  repromaterijal: boolean,
  img: string
}


export interface GrupaArtiklaInsert  {
  naziv: string,
  porezNaPotrosnjuID: number,
  porezID: number,
  vrstaID: number,
  pos: boolean,
  napomena: boolean,
  uticeNaSkladiste: boolean,
  default: boolean,
  sank: boolean,
  kuhinja: boolean,
  repromaterijal: boolean,
  img: string
}
