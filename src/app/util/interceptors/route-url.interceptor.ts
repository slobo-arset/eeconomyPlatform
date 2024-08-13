import {Inject, Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";


@Injectable()
export class RouteUrlInterceptor implements HttpInterceptor {

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest.clone({
      url: 'http://127.0.0.1:5001' + httpRequest.url,
    }));
  }
}
