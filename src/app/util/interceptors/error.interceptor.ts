import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, ObservableInput} from "rxjs";
import {DisplayMessageService} from "../../data-access/message/message.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private displayMessageService: DisplayMessageService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse): ObservableInput<any> => {

        console.log('ERROR...', err.status);

        this.displayMessageService.emitMessageAlert();

        throw err;
      })
    );
  }
}
function isValidationException(error: any) {
  throw new Error('Function not implemented.');
}
