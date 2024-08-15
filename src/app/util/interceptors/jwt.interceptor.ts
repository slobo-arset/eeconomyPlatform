import {Inject, Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private store: Store) {
  }


  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(httpRequest);
    const cloned = httpRequest.clone({
      headers: httpRequest.headers.set('Authorization', `Bearer `),
    });
    return next.handle(cloned);
  }
}
