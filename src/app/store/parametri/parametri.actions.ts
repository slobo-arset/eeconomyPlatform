import {createAction, props} from "@ngrx/store";


import {ParametriTypes} from "./parametri.types";
import {Vrsta} from "../../data-access/parametri/vrste/vrsta";

/* VRSTE */
export const getVrste = createAction(
  ParametriTypes.GET_ALL_VRSTE_REQUEST,
  props<{ data: number }>()
);

export const getVrsteSuccess = createAction(
  ParametriTypes.GET_ALL_VRSTE_REQUEST_SUCCESS,
  props<{data: Vrsta[]}>()
);

export const getVrsteError = createAction(
  ParametriTypes.GET_ALL_VRSTE_REQUEST_FAILURE
);


export const createVrste = createAction(
  ParametriTypes.CREATE_VRSTE_REQUEST,
  props<{ data: Vrsta }>()
);

export const createVrsteSuccess = createAction(
  ParametriTypes.CREATE_VRSTE_REQUEST_SUCCESS
);

export const createVrsteError = createAction(
  ParametriTypes.CREATE_VRSTE_REQUEST_FAILURE
);


export const updateVrste = createAction(
  ParametriTypes.UPDATE_VRSTE_REQUEST,
  props<{ data: Vrsta }>()
);

export const updateVrsteSuccess = createAction(
  ParametriTypes.UPDATE_VRSTE_REQUEST_SUCCESS
);

export const updateVrsteError = createAction(
  ParametriTypes.UPDATE_VRSTE_REQUEST_FAILURE
);
