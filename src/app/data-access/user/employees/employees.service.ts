import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseUrl = "user";

  constructor(private http: HttpClient) { }

  getUser(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  create(data: any){
    return this.http.post<any>(`${this.baseUrl}/`, data);
  }

  update(id: string, data: any){
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }
}
