import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private baseUrl = "log";

  constructor(private http: HttpClient) { }

  getAll():Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
