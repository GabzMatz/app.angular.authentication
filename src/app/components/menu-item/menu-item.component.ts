//#region Imports

import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { SideMenuItem } from './menu-item.interface';

//#endregion

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent implements OnInit, OnChanges {
  constructor(
    private readonly router: Router,
  ) {
  }

  //#region Public Properties

  @Input({ required: true })
  public item!: SideMenuItem;

  public isTheActiveRoute: boolean = false;

  //#endregion

  //#region Private Properties

  private currentUrl: string = '';

  //#endregion

  //#region Public Methods

  public ngOnInit(): void {
    this.isTheActiveRoute = this.isActivated();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['item'].previousValue !== changes['item'].currentValue) {
      setTimeout(() => {
        this.isTheActiveRoute = this.isActivated();
      }, 400);
    }
  }

  public async onClick(): Promise<void> {
    if (this.item.link === '*') return;

    await this.router.navigateByUrl(this.item.link);
  }

  //#endregion

  //#region Private Methods

  private isActivated(): boolean {
    if (!this.item) return false;

    const normalizedUrl = this.currentUrl.startsWith('/')
      ? this.currentUrl.substring(1)
      : this.currentUrl;

    return this.item.link === normalizedUrl;
  }

  //#endregion
}
