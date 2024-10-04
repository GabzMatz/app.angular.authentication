//#region Imports

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpAsyncConfig } from '../models/http-async.config';
import { HTTP_ASYNC_CONFIG } from '../models/injection-tokens';

//#endregion

@Injectable()
export class HttpAsyncHeadersInterceptor implements HttpInterceptor {

  constructor(
    @Inject(HTTP_ASYNC_CONFIG)
    @Optional()
    protected readonly config?: HttpAsyncConfig,
  ) { }

  //#region Public Static Properties

  public static readonly DISABLE_HEADER: string = 'X-Disabled-HttpAsyncHeaders';

  //#endregion

  //#region Public Methods

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.config?.defaultHeaders) {
      console.warn('Você incluiu o Interceptor para adicionar os Headers mas não configurou nenhum Header no módulo.');

      return next.handle(req);
    }

    if (!req.headers.get(HttpAsyncHeadersInterceptor.DISABLE_HEADER)) {
      let headers = req.headers;

      for (const property of Object.keys(this.config.defaultHeaders))
        headers = headers.set(property, this.config.defaultHeaders[property]);

      req = req.clone({
        headers,
      });
    } else {
      req = req.clone({
        headers: req.headers.delete(HttpAsyncHeadersInterceptor.DISABLE_HEADER),
      });
    }

    return next.handle(req);
  }

  //#endregion

}
