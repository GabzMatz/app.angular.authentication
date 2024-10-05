import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { MenuItemModule } from '../menu-item/menu-item.module';
import { MenuComponent } from './menu.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
@NgModule({
  imports: [
    CommonModule,
    MenuItemModule,
    SidebarModule,
    ToastModule,
    ConfirmPopupModule,
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {}
