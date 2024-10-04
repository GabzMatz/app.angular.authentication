//#region Imports

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, firstValueFrom } from 'rxjs';
import { AsyncResult } from './models/async-result';
import { ExtraOptions } from './models/http-options';
import { HTTP_ASYNC_CONFIG } from './models/injection-tokens';

//#endregion

@Injectable()
export class HttpAsyncService {
  //#region Constructor

  constructor(protected readonly http: HttpClient) {}

  //#endregion

  //#region Private Properties

  private readonly onHttpError: Subject<HttpErrorResponse> =
    new Subject<HttpErrorResponse>();

  //#endregion

  //#region Methods

  public getOnHttpError$(): Observable<HttpErrorResponse> {
    return this.onHttpError.asObservable();
  }

  public getNativeClient(): HttpClient {
    return this.http;
  }

  public async get<T>(
    url: string,
    options?: ExtraOptions,
  ): Promise<AsyncResult<T>> {
    return await firstValueFrom(
      this.http.get<T>(url, { ...options, reportProgress: true }),
    )
      .then((data: T) => this.success(data))
      .catch((error: HttpErrorResponse) => this.error<T>(error))
      .then<AsyncResult<T>>((result: AsyncResult<T>) => result);
  }

  public async post<T>(
    url: string,
    payload: object,
    options?: ExtraOptions,
  ): Promise<AsyncResult<T>> {
    return await firstValueFrom(this.http.post<T>(url, payload, options))
      .then((data: T) => this.success(data))
      .catch((error: HttpErrorResponse) => this.error<T>(error))
      .then<AsyncResult<T>>((result: AsyncResult<T>) => result);
  }

  public async put<T>(
    url: string,
    payload: object,
    options?: ExtraOptions,
  ): Promise<AsyncResult<T>> {
    return await firstValueFrom(this.http.put<T>(url, payload, options))
      .then((data: T) => this.success(data))
      .catch((error: HttpErrorResponse) => this.error<T>(error))
      .then<AsyncResult<T>>((result: AsyncResult<T>) => result);
  }

  public async patch<T>(
    url: string,
    payload: object,
    options?: ExtraOptions,
  ): Promise<AsyncResult<T>> {
    return await firstValueFrom(this.http.patch<T>(url, payload, options))
      .then((data: T) => this.success(data))
      .catch((error: HttpErrorResponse) => this.error<T>(error))
      .then<AsyncResult<T>>((result: AsyncResult<T>) => result);
  }

  public async delete<T>(
    url: string,
    options?: ExtraOptions,
  ): Promise<AsyncResult<T>> {
    return await firstValueFrom(this.http.delete<T>(url, options))
      .then((data: T) => this.success(data))
      .catch((error: HttpErrorResponse) => this.error<T>(error))
      .then<AsyncResult<T>>((result: AsyncResult<T>) => result);
  }

  private success<T>(result: T): AsyncResult<T> {
    return {
      success: result,
    };
  }

  private error<T>(error: HttpErrorResponse): AsyncResult<T> {
    this.onHttpError.next(error);

    return {
      error,
    };
  }

  //#endregion
}
