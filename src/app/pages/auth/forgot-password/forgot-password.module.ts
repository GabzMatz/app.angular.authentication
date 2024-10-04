//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password.component';

//#endregion

const routes: Routes = [{ path: '', component: ForgotPasswordComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ForgotPasswordComponent],
  declarations: [ForgotPasswordComponent],
})
export class ForgotPasswordModule {}
