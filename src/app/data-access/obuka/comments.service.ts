import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {


  private baseUrl = "video/comments";

  constructor(private http: HttpClient) { }


  create(data: any):Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  get(id: number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }


}
