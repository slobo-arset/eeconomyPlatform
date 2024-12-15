import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  private baseUrl = "companies";

  constructor(private http: HttpClient) { }

  getAll():Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getById(id):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  update(id,data):Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`,data);
  }

  updateData(id,data):Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/data/${id}`,data);
  }
  updateStatus(id,data):Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/status/${id}`,data);
  }



}
