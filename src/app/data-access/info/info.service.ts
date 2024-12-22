import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

    private baseUrl = "info";

    constructor(private http: HttpClient) { }

    getAllErokovi(mnt: string, tip: number, optionalParams?: { [key: string]: any }):Observable<any> {
      let params = new HttpParams();
      if (optionalParams) {
        for (const key in optionalParams) {
          if (optionalParams[key] !== undefined && optionalParams[key] !== null) {
            params = params.set(key, optionalParams[key]);
          }
        }
      }

      return this.http.get<any>(`${this.baseUrl}/e_rokovi/${mnt}/${tip}`, { params });
    }

    createErokovi(data: any):Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/e_rokovi`, data);
    }

    deleteErokovi(id: string):Observable<any> {
      return this.http.delete<any>(`${this.baseUrl}/e_rokovi/${id}`);
    }

    updateErokovi(id: number, data: any):Observable<any> {
      return this.http.put<any>(`${this.baseUrl}/e_rokovi/${id}`, data);
    }


    getAllVrstaPoreskePrijave():Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/vrsta_poreske_prijave`);
    }


    createVrstaPoreskePrijave(data: any):Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/vrsta_poreske_prijave`, data);
    }


    updateVrstaPoreskePrijave(id: number, data: any):Observable<any> {
      return this.http.put<any>(`${this.baseUrl}/vrsta_poreske_prijave/${id}`, data);
    }

    deleteVrstaPoreskePrijave(id: string):Observable<any> {
      return this.http.delete<any>(`${this.baseUrl}/vrsta_poreske_prijave/${id}`);
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
