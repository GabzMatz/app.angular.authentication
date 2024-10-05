//#region Imports

import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PrimeIcons } from 'primeng/api';
import { SideMenuItem } from '../models/interfaces/side-menu-item.interface';
//#endregion

@Component({
  selector: 'app-pages',
  template: `
    <main
      class="h-screen w-screen flex flex-column overflow-hidden surface-ground"
    >
      <header #header class="w-full">
        <app-header [items]="menuItems"></app-header>
      </header>
      <section class="h-full w-full flex flex-1 grid">
        <div class="w-15rem min-w-max border-right-3 surface-border">
          <app-menu [items]="menuItems"></app-menu>
        </div>

        <div
          class="flex-1 overflow-auto"
          [style.height]="'calc(100vh - ' + header.offsetHeight + 'px)'"
        >
          <ng-content><router-outlet></router-outlet></ng-content>
        </div>
      </section>
    </main>
  `,
})
export class PagesComponent implements OnInit {
  constructor() {}

  //#region Public Properties

  public menuItems: SideMenuItem[] = [
    {
      title: 'Usuários',
      icon: PrimeIcons.USER,
      link: 'pages/users',
    },
  ];

  //#endregion

  //#region Public Methods

  public async ngOnInit(): Promise<void> {}

  //#endregion
}
