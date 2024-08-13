import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {ParametriState} from "../../interface/parametri";


export const ParametriFeature = (state: AppState) => state.parametri;

export const VrsteList = createSelector(
  ParametriFeature,
  (state: ParametriState)=> state.vrste
)
