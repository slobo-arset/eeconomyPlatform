import {ActionReducer, INIT, MetaReducer, UPDATE} from "@ngrx/store";
import {AppState} from "../app.state";
import {AuthTypes} from "../auth/auth.types";


export const hydrationMetaReducer = (
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem("state");
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem("state");
        }
      }
    }

    const nextState = reducer(state, action);
    if (action.type === AuthTypes.LOGIN_REQUEST_SUCCESS ) {
      localStorage.setItem("state", JSON.stringify(nextState));
    }
    return nextState;

  };
};


export const metaReducers: MetaReducer[] = [
  hydrationMetaReducer
]
