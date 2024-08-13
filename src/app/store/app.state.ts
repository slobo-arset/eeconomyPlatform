import {AuthState} from "../interface/auth";
import {ParametriState} from "../interface/parametri";


export interface  AppState {
  auth: AuthState;
  parametri: ParametriState
}
