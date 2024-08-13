import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, switchMap, tap} from "rxjs/operators";
import {AuthTypes} from "./auth.types";
import {AuthService} from "../../data-access/auth/auth.service";
import {loginError, loginSuccess, logoutSuccess} from "./auth.actions";
import {AuthResp} from "../../interface/auth";
import {Router} from "@angular/router";
import {of} from "rxjs";


@Injectable()
export class LoginEffects {

  constructor(
    private actions$: Actions,
    private auhtService: AuthService,
    private router: Router
  ) {
  }

  Login$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthTypes.LOGIN_REQUEST),
        mergeMap(({data}) => {
            return this.auhtService.login(data).pipe(
              tap((data) => {
                console.log('ddd', data)
              }),
              map((data: AuthResp) => loginSuccess({data})),
              catchError(() => [loginError()])
            )
          }
        ),
        tap(() => this.router.navigate(['/']))
      ),
    {functional: true}
  );


  LogOut$ = createEffect(() => this.actions$.pipe(
    ofType(AuthTypes.LOGOUT),
    switchMap(action =>
      of({}).pipe(
        map(events => logoutSuccess()),
        //catchError(error =>  [] )
      )
    ),
    tap(() => {
      localStorage.removeItem("state");
      this.router.navigate(['/login'])
    })),
    {functional: true}
  );

}
