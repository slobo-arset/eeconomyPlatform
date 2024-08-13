import {createReducer, on, State} from "@ngrx/store";

import {AuthResp, AuthState} from "../../interface/auth";
import {loginSuccess, logoutSuccess} from "./auth.actions";

export const initialState: AuthState = {
  isLogin: false,
  companyName: '',
  companyId: 0,
  userId: '',
  token: '',
};

export const AuthReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { data }): AuthState => (
    { ...state,
      isLogin: true,
      companyId: data.companyId,
      companyName: data.companyName,
      userId: data.userId,
      token: data.token
    }
    )),
  on(logoutSuccess, (state): AuthState => (
    { ...state,
      isLogin: false,
      companyName: '',
      companyId: 0,
      userId: '',
      token: ''
    }
  )),
);
