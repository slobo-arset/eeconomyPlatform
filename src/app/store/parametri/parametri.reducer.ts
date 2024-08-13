import {createReducer, on} from "@ngrx/store";
import {ParametriState} from "../../interface/parametri";
import {loginSuccess} from "../auth/auth.actions";
import {AuthState} from "../../interface/auth";
import {getVrsteSuccess} from "./parametri.actions";

export const initialState: ParametriState = {
  vrste: [],
  jedinice_mjere: []
};

export const ParametriReducer = createReducer(
  initialState,
  on(getVrsteSuccess, (state, { data }): ParametriState => (
    { ...state,
      vrste: data
    }
  )),
);
