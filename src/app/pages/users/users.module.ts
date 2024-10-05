//#region Imports

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';

//#endregion

const routes: Routes = [{ path: '', component: UsersComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
    TableModule,
    ConfirmPopupModule,
    ToastModule,
    DialogModule
  ],
  declarations: [
    UsersComponent
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
