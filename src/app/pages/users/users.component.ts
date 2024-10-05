import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/interfaces/user.inteface';
import { UserRolesEnum } from '../../models/enums/user-roles.enum';
import { ConfirmationService, MessageService, PrimeIcons } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  constructor(
    private readonly userService: UserService,
    private readonly formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  //#region Public Properties

  public users: User[] = [];

  public userRoleType: typeof UserRolesEnum = UserRolesEnum;

  public isUserAdmin: boolean = false;

  public openDialog: boolean = false;

  public formGroup: FormGroup;

  //#endregion

  //#region Public Methods

  public async ngOnInit(): Promise<void> {
    const userRole = sessionStorage.getItem('userrole');
    this.isUserAdmin = userRole === this.userRoleType.ADMIN;

    await this.loadUsers();
  }

  public openDeleteModal(event: Event, userId: string): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Deseja realmente se deslogar?',
      icon: PrimeIcons.EXCLAMATION_CIRCLE,
      rejectLabel: 'Cancelar',
      acceptLabel: 'Deletar',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',

      accept: async () => {
        await this.deleteUser(userId);
      },
    });
  }

  public async updateUser(userId: string): Promise<void> {
    const name = this.formGroup.getRawValue().name;

    if (!name) return;

    await this.userService.updateOne(userId, name).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso"',
          detail: 'Usuário atualizado com sucesso!',
          life: 3000,
        });
        this.loadUsers();
      },
      error: (error: any) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Opss...',
          detail: 'Erro ao atualizar usuário: ' + error.message,
          life: 3000,
        });
      },
    });
  }

  private async deleteUser(userId: string): Promise<void> {
    await this.userService.deleteOne(userId).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Sucesso"',
          detail: 'Usuário removido com sucesso!',
          life: 3000,
        });

        this.loadUsers();
      },
      error: (error: any) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Opss...',
          detail: 'Erro ao deletar usuário: ' + error.message,
          life: 3000,
        });
      },
    });
  }

  //#endregion

  //#region Private Methods

  private async loadUsers(): Promise<void> {
    await this.userService.listMany().subscribe({
      next: (response: User[]) => this.users = response,
      error: (error: any) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Opss...',
          detail: 'Erro ao listar usuário: ' + error.message,
          life: 3000,
        });
      },
    });
  }

  //#endregion
}
