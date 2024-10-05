import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ConfirmPopupModule],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  
}
