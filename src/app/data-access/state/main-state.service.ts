import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { Observable } from 'rxjs';

export interface StoreState {
  store: unknown;
  route: string;
}


@Injectable({
  providedIn: 'root'
})
export class MainStateService  extends StateService<StoreState> {

  constructor() {
    super();
  }

  getState() {
    return this.state;
  }

  setAppState(state: any) {
    this.setState(state);
  }

  clearAll(): void {
    this.clearState();
  }

  override getObservableState(): Observable<StoreState> {
    return StateService.state$.asObservable();
  }

  override getObservableStateByKey(key: string): Observable<StoreState> {
    return super.getObservableStateByKey(key);
  }

  getStateBykey(key: string): any {
    return StateService.state$.getValue()[key];
  }

  removeStateByKey(key: string): any {
    return this.removeState(key);
  }

  subscribeToKeyUpdates(keys: string[], callback: (values: any) => void) {
    StateService.state$.asObservable().subscribe((state) => {
      const values: any = {};
      keys.forEach((key) => {
        const keyParts = key.split('.');
        let value: any = state;
        keyParts.forEach((part) => {
          if (value.hasOwnProperty(part)) {
            value = value[part];
          } else {
            value = undefined;
          }
        });
        values[key] = value;
      });
      callback(values);
    });
  }
}
