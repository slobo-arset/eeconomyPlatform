import {DrzaveRef} from "../data-access/parametri/drzave/drzava";

export interface FizickaLica {
  id?: number,
  sifra: string,
  ime: string,
  prezime: string,
  adresa: string,
  mjesto: string,
  jmbg?: number,
  telefon: string,
  mobilni: string,
  email: string,
  drzava: DrzaveRef
}
