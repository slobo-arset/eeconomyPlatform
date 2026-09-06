import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FukService {
  private readonly baseUrl = 'fuk';

  constructor(private http: HttpClient) {}

  getAll(route: string, companyId: number | string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${route}/all/${companyId}`);
  }

  getAllManage(route: string, companyId: number | string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${route}/manage/${companyId}`);
  }

  getByParent(companyId: number | string, parentId: number | string | null): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/organizacione-jedinice/by-parent/${companyId}/${parentId ?? 'null'}`);
  }

  getById(route: string, id: number | string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${route}/${id}`);
  }

  create(route: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${route}`, data);
  }

  update(route: string, id: number | string, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${route}/${id}`, data);
  }

  delete(route: string, id: number | string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${route}/${id}`);
  }
}
