import {Vrsta} from "../data-access/parametri/vrste/vrsta";
import {JediniceMjere} from "../data-access/parametri/jedinice-mjere/jedinice-mjere";

export interface ParametriState {
  vrste: Vrsta[],
  jedinice_mjere: JediniceMjere[]
}
