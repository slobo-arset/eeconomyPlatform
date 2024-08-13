import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vrsta } from './vrsta';
import {ApiService} from "../../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class VrsteService{

  baseUrl = '/api/parametri';

  constructor(private apiService: ApiService) {
  }

  getAllVrste(data: number):Observable<Vrsta[]>{
    return this.apiService.get<any>(
      `${this.baseUrl}/vrste/${data}`
    );
  }

}
