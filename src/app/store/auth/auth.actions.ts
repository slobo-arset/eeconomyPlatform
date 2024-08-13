import {createAction, props} from "@ngrx/store";
import {AuthTypes} from "./auth.types";
import {AuthResp, LoginData} from "../../interface/auth";

export const login = createAction(
  AuthTypes.LOGIN_REQUEST,
  props<{ data: LoginData }>()
);

export const loginSuccess = createAction(
  AuthTypes.LOGIN_REQUEST_SUCCESS,
  props<{data: AuthResp}>()
);

export const loginError = createAction(
  AuthTypes.LOGIN_REQUEST_FAILURE
);

export const  logout = createAction(
  AuthTypes.LOGOUT
);

export const  logoutSuccess = createAction(
  AuthTypes.LOGOUT_SUCCESS
);




// export const  logoutError = createAction(
//   AuthTypes.LOGOUT_FAILURE
// );
