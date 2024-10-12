import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private baseUrl = "video/topic";

  constructor(private http: HttpClient) { }


  create(data: any):Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  getTopicByCategory(id: string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  delete(id: string):Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

}
