import {PoslovnicaRef} from "../poslovnice/poslovnica";

export interface Skladiste {
  id?: number,
  naziv: string,
  poslovnica: PoslovnicaRef
}
