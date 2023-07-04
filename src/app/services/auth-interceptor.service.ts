import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private inject:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    
    // Clone the request to add the new header.
    return next.handle(req).pipe(catchError(err => {
      if(err instanceof HttpErrorResponse) {
        if(err.status === 400) {
          console.log("400 handler logic")
        }
        if(err.status === 401) {
          console.log("401 handler logic")
        } else if(err.status === 500) {
          console.log("500 Handler Logic")
        }
        // ......
      }
      throw err;
    }));
}
}
