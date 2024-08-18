import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {HttpClient} from "@angular/common/http";
import {AuthResp, LoginData} from "../../interface/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  public login(data: LoginData): Observable<AuthResp> {
    return this.http.post<AuthResp>('auth/login',data)
  }

}
