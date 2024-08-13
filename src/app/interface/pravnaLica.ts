import {DrzaveRef} from "../data-access/parametri/drzave/drzava";

export interface PravnaLica {
  id?: number,
  sifra: string,
  naziv: string,
  adresa: string,
  mjesto: string,
  mb: number,
  pdv: number,
  telefon: string,
  mobilni: string,
  email: string,
  kontakt: string,
  drzava: DrzaveRef
}
