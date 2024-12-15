import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EfaktureService {

  private baseUrl = "efakture/ulazne";

  constructor(private http: HttpClient) { }

  getInvoices(dateFrom: string, dateTo: string, apiKey: string): Observable<any> {
    const payload = { dateFrom, dateTo, apiKey };
    return this.http.post<any>(`${this.baseUrl}/fakture-u-opsegu`, payload);
  }


  insertInvoice(id: string, payload: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/insert-fakture/${id}`, payload);
  }

}
