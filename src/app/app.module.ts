import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpAsyncModule } from './services/http-async/http-async.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { HttpAsyncHeadersInterceptor } from './services/http-async/interceptors/http-async-headers.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './services/http-async/interceptors/base-url.interceptor';


registerLocaleData(localePt, 'pt');

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpAsyncModule.withConfig({
      baseUrl: environment.api.baseUrl,
      defaultHeaders: {
        Accept: 'application/json',
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAsyncHeadersInterceptor,
      multi: true,
    },
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
})
export class AppModule {}
