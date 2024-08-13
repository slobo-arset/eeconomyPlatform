import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import * as selector from './../../store/auth/auth.selector'
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {HttpClient} from "@angular/common/http";
import {AuthResp, LoginData} from "../../interface/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private store: Store<AppState>,
    private http: HttpClient
  ) { }

   isAuthenticated(): Observable<boolean> {
    return this.store.select(selector.isLogin);
  }

  public login(data: LoginData): Observable<AuthResp> {
    return this.http.post<AuthResp>('http://127.0.0.1:5001/api/auth/login',data)
  }

}
