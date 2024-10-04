import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpAsyncConfig } from './models/http-async.config';
import { HTTP_ASYNC_CONFIG } from './models/injection-tokens';
import { HttpAsyncService } from './http-async.service';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    HttpAsyncService,
  ],
})
export class HttpAsyncModule {
  public static withConfig(configValue: HttpAsyncConfig | (() => HttpAsyncConfig)): ModuleWithProviders<HttpAsyncModule> {
    return {
      ngModule: HttpAsyncModule,
      providers: [
        {
          provide: HTTP_ASYNC_CONFIG,
          useValue: configValue,
        },
        HttpAsyncService,
      ],
    };
  }
}
