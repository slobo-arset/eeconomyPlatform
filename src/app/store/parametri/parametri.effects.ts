import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ParametriTypes} from "./parametri.types";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import {VrsteService} from "../../data-access/parametri/vrste/vrste.service";
import {getVrsteError, getVrsteSuccess} from "./parametri.actions";
import {Vrsta} from "../../data-access/parametri/vrste/vrsta";


@Injectable()
export class ParametriEffects {

  constructor(
    private actions$: Actions,
    private vrstaService: VrsteService,
  ) {
  }

  getAllVrste = createEffect(() => this.actions$.pipe(
    ofType(ParametriTypes.GET_ALL_VRSTE_REQUEST),
    mergeMap(({data}) => {
        return this.vrstaService.getAllVrste(data).pipe(
          tap((data) => {
            console.log('ddd', data)
          }),
          map((data: Vrsta[]) => getVrsteSuccess({data})),
          catchError(() => [getVrsteError()])
        )
      }
    ),
    ),
    {functional: true})
}
