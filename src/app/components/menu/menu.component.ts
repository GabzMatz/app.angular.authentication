//#region Imports

import { Component, Input } from '@angular/core';
import { SideMenuItem } from '../../models/interfaces/side-menu-item.interface';
import { ConfirmationService, MessageService, PrimeIcons } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

//#endregion

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  //#region Public Properties

  @Input()
  public items: SideMenuItem[] = [];

  public signOutMenu: SideMenuItem = {
    icon: PrimeIcons.SIGN_OUT,
    link: '*',
    title: 'Sair',
  };

  //#endregion

  //#region Public Methods

  public openLogoutConfirmation(event: Event): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Deseja realmente se deslogar?',
      icon: PrimeIcons.EXCLAMATION_CIRCLE,
      rejectLabel: 'Cancelar',
      acceptLabel: 'Sair',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',

      accept: () => {
        this.authService.logout();
        this.messageService.add({
          severity: 'info',
          summary: 'Até mais"',
          detail: 'Deslogado com sucesso!',
          life: 3000,
        });
        this.navigateToLogin();
      },
      // reject: () => {
      //   this.messageService.add({
      //     severity: 'error',
      //     summary: 'Rejected',
      //     detail: 'You have rejected',
      //     life: 3000,
      //   });
      // },
    });
  }

  public async navigateToLogin(): Promise<void> {
    this.router.navigate(['auth']);
  }

  //#endregion
}
