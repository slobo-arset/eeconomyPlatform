import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {AuthState} from "../../interface/auth";

export const authFeature = (state: AppState) => state.auth;

export const isLogin = createSelector(
  authFeature,
  (state: AuthState) => state.isLogin
);

export const companyName = createSelector(
  authFeature,
  (state: AuthState) => state.companyName
);

export const companyID = createSelector(
  authFeature,
  (state: AuthState) => state.companyId
);


export const token = createSelector(
  authFeature,
  (state: AuthState) => state.token
);
