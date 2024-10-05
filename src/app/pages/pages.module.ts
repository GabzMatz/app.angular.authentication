import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderModule } from '../components/header/header.module';
import { MenuModule } from '../components/menu/menu.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, PagesRoutingModule, MenuModule, HeaderModule],
  declarations: [PagesComponent],
})
export class PagesModule {}
