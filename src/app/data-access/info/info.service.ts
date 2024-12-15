import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

    private baseUrl = "info";

    constructor(private http: HttpClient) { }

    getAllErokovi(mnt: string):Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/e_rokovi/${mnt}`);
    }


    getAllEInformator(mnt: string):Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/e_informator/${mnt}`);
    }

    createEInformator(data: any):Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/e_informator`, data);
    }

    deleteEInformator(id: string):Observable<any> {
      return this.http.delete<any>(`${this.baseUrl}/e_informator/${id}`);
    }

    updateEInformator(id: number, data: any):Observable<any> {
      return this.http.put<any>(`${this.baseUrl}/e_informator/${id}`, data);
    }

}
