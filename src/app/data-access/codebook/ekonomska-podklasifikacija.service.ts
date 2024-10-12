import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EkonomskaPodklasifikacijaService {

  private baseUrl = "codebook/ekonomska-podklasifikacija";

  constructor(private http: HttpClient) { }

  getAll(id: string, klasifikacija_id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all/${id}/${klasifikacija_id}`);
  }

  getById(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  create(data: any):Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  update(data: any, id: string):Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string):Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

}
