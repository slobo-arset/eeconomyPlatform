import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PodizvorFinansiranjaService {

  private baseUrl = "codebook/podizvor-finansiranja";

  constructor(private http: HttpClient) { }

  getAll(id: string, izvor_finansiranja_id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all/${id}/${izvor_finansiranja_id}`);
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
