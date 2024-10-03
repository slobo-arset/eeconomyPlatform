import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private baseUrl = "video/data";

  constructor(private http: HttpClient) { }


  create(data: any):Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  getVideoByCategory(id: number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getVideoByCategoryActive(id: number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/active/${id}`);
  }

  getVideoById(id: number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/one/${id}`);
  }

}
