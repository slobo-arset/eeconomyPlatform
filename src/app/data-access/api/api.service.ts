import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService  {
  constructor(private http: HttpClient) {
  }

  get<T>(url: string, options = {}): Observable<T> {
    return this.http.get<T>(url, options);
  }

  // getAllPaginated<T>(
  //   url: string,
  //   options: PaginatedRequest = {
  //     page: 1,
  //     count: 10,
  //     sorts: [],
  //     filters: [],
  //   }
  // ): Observable<PaginatedResponse<T>> {
  //   return this.http.post<PaginatedResponse<T>>(url, options);
  // }

  put<T>(url: string, data: T, options = {}): Observable<T> {
    return this.http.put<T>(url, data, options);
  }

  post<T>(url: string, data: any, options = {}): Observable<T> {
    return this.http.post<T>(url, data, options);
  }

  delete<T>(url: string, options = {}): Observable<T> {
    return this.http.delete<any>(url, options);
  }
}
