import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AvatarModule,
    ButtonModule,
    BreadcrumbModule,
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
})
export class HeaderModule {}
