export interface Artikal{
  id?: number
  sifra_artikla: string
  naziv: string
  grupa_artikla_id?: number
  grupa_artikla_naziv?: string
  serijski_broj: string
  bar_kod: string
  mc: number
  marza: number
  vpc: number
  cijena: number
  fiskalni_broj: string
  min_kolicina: number
  jedinica_mjere_id?: number
  jedinica_mjere_naziv?: string
  img?: string
  ruc: number
  n: boolean
  p: boolean
  w: boolean
}
