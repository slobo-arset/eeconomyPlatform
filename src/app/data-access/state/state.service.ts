import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  map,
  distinctUntilChanged,
  shareReplay,
  debounceTime,
  filter,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StateService<T> {
  protected static state$: BehaviorSubject<any> = new BehaviorSubject({});
  protected get state(): T {
    return StateService.state$.getValue();
  }

  protected select<K>(mapFn: (state: T) => K): Observable<K> {
    return StateService.state$.asObservable().pipe(
      map((state: T) => mapFn(state)),
      shareReplay({ refCount: true, bufferSize: 1 }),
      distinctUntilChanged()
    );
  }

  protected getObservableState(): Observable<any> {
    return StateService.state$.asObservable();
  }

  protected getObservableStateByKey(key: string): Observable<any> {
    return StateService.state$.asObservable().pipe(
      map((state: any): any => {
        return state[key];
      })
    );
  }

  protected getBykey(key: string): any {
    return StateService.state$.getValue()[key];
  }

  protected setState(newState: any): void {
    StateService.state$.next({
      ...this.state,
      ...newState,
    });
    localStorage.setItem(
      'state',
      JSON.stringify({
        ...this.state,
        ...newState,
      })
    );
  }

  protected removeState(key: string): void {
    const state = StateService.state$.getValue();
    delete state[key];
    this.setState(state);
  }

  protected clearState(): void {
    StateService.state$.next({});
    // setTimeout((): void => {
    //   StateService.state$.next({});
    // }, 200);
  }

  protected removeSome(namePart: string): void {
    const state = StateService.state$.getValue();
    for (const key in state) {
      if (key.includes(namePart)) {
        delete state[key];
      }
    }
    this.setState(state);
  }

  protected removeMultipleByKey(keys: string[]): void {
    const state = StateService.state$.getValue();
    for (const key in state) {
      for (let k of keys) {
        if (key.includes(k)) {
          delete state[key];
        }
      }
    }
    this.setState(state);
  }

  protected removeMultipleByKeyWithException(
    keys: string[],
    exception: string
  ): void {
    const state = StateService.state$.getValue();
    for (const key in state) {
      for (let k of keys) {
        if (key.includes(k) && !key.toLowerCase().includes(exception)) {
          delete state[key];
        }
      }
    }
    this.setState(state);
  }
}
