import {Inject, Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import { environment } from "src/environments/environment";


@Injectable()
export class RouteUrlInterceptor implements HttpInterceptor {

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest.clone({
      url: environment.apiUrl + httpRequest.url,
    }));
  }
}
