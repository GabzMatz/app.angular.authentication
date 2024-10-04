//#region Imports

import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PrimeIcons } from 'primeng/api';
//#endregion

@Component({
  selector: 'app-pages',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class PagesComponent implements OnInit {
  constructor() {
   
  }

  //#region Public Properties

  // public menuItems: SideMenuItem[] = [
  //   {
  //     title: 'Usuários',
  //     icon: PrimeIcons.USER,
  //     link: 'pages/users',
  //   },
  // ];

  //#endregion

  //#region Public Methods

  public async ngOnInit(): Promise<void> {
  }

  //#endregion
}
