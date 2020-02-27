import { Injectable } from '@angular/core';
import { LoadingProgressService } from './loading-progress.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { AuthenticationService } from '../_service/authentication.service';

@Injectable()
export class LoadingProgressInterceptor implements HttpInterceptor {

  public activeRequests = 0;

  public skippUrls = [
    '/authrefresh',
  ];

  constructor(private loadingScreenService: LoadingProgressService, private authenticationService: AuthenticationService) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let displayLoadingScreen = true;

    for (const skippUrl of this.skippUrls) {
      if (new RegExp(skippUrl).test(request.url)) {
        displayLoadingScreen = false;
        break;
      }
    }

    const newRequest = request.clone({ setHeaders: { auth_token: this.authenticationService.tokenValue.auth_token } });

    if (displayLoadingScreen) {
      if (this.activeRequests === 0) {
        this.loadingScreenService.startLoading();
      }
      this.activeRequests++;

      return next.handle(newRequest).pipe(
        finalize(() => {
          this.activeRequests--;
          if (this.activeRequests === 0) {
            this.loadingScreenService.stopLoading();
          }
        }
        ));
    } else {
      return next.handle(newRequest);
    }
  }
}
