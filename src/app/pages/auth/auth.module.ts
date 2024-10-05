//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';

//#endregion

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    ForgotPasswordModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
        children: [
          { path: 'login', component: LoginComponent },
          {
            path: 'forgot-password',
            loadChildren: () =>
              import('./forgot-password/forgot-password.module').then(
                (m) => m.ForgotPasswordModule,
              ),
          },
          { path: '**', redirectTo: 'login' },
        ],
      },
    ]),
  ],
  exports: [AuthComponent],
  declarations: [AuthComponent],
})
export class AuthModule {}
