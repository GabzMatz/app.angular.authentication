//#region Imports

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpAsyncConfig } from '../models/http-async.config';
import { HTTP_ASYNC_CONFIG } from '../models/injection-tokens';

//#endregion

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor(
    @Inject(HTTP_ASYNC_CONFIG)
    @Optional()
    protected readonly config?: HttpAsyncConfig,
  ) {}

  //#region Public Static Properties

  public static readonly DISABLE_HEADER: string = 'X-Disabled-BaseUrl';

  //#endregion

  //#region Public Methods

  public intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const isFetchingAnimations = req.url.includes('/assets/rive');

    if (
      !req.headers.get(BaseUrlInterceptor.DISABLE_HEADER) &&
      !isFetchingAnimations
    ) {
      req = req.clone({
        url: `${this.config?.baseUrl}${req.url}`,
      });
    } else {
      req = req.clone({
        headers: req.headers.delete(BaseUrlInterceptor.DISABLE_HEADER),
      });
    }

    return next.handle(req);
  }

  //#endregion
}
