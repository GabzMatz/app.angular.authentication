import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpAsyncModule } from './services/http-async/http-async.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


registerLocaleData(localePt, 'pt');

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpAsyncModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
})
export class AppModule {}
