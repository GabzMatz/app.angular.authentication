import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface DefaultOptions {
  headers?: HttpHeaders | Record<string, string | string[]>;

  withCredentials?: boolean;
}

export interface ExtraOptions extends DefaultOptions {
  params?: HttpParams | Record<string, string | string[]>;

  reportProgress?: boolean;
}
