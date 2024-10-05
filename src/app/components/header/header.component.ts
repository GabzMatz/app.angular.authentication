//#region Imports

import { Component, Input, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SideMenuItem } from '../../models/interfaces/side-menu-item.interface';
//#endregion

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(
    private readonly router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url.replace('/pages/', '').split('/')[0];
        this.updateBreadcrumbsValues();
      }
    });
  }

  //#region Public Properties

  @Input()
  public items!: SideMenuItem[];

  public isOverlayOpen: boolean = false;

  public breadcrumbs: MenuItem[] = [];

  public currentRoute: string = '';

  //#endregion

  //#region Life Cycles

  public ngOnInit(): void {
    this.updateBreadcrumbsValues();
  }

  //#endregion

  //#region Public methods


  public closeOverlay(): void {
    this.isOverlayOpen = false;
  }

  public async navigateTo(e: any): Promise<void> {
    if (e.item.routerLink)
      await this.router.navigate(['pages/' + e.item.routerLink]);
  }

  //#endregion

  //#region Private methods

  private updateBreadcrumbsValues(): void {
    if (this.items) {
      const activeItems: any[] = this.items.map((item) => {
        if (!this.currentRoute.trim().length) {
          if (item.link === 'pages/users') return [item];

          return [];
        }

        if (item.link.includes(this.currentRoute)) return [item];
         
        return [];
      });

      const list: SideMenuItem[] = activeItems.flat(Infinity);
      this.breadcrumbs = this.convertValuesToMenuItem(list);
    }
  }

  private convertValuesToMenuItem(menu: SideMenuItem[]): MenuItem[] {
    return menu.flatMap(this.getNewItemValue);
  }

  private getNewItemValue(item: SideMenuItem): MenuItem[] {
    const newItem: MenuItem = {
      label: item.title,
      routerLink: item.link,
      icon: item.icon,
    };

    return [newItem];
  }

  //#endregion
}
