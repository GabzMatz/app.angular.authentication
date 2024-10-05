//#region Imports

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPayload } from '../../../models/payloads/login.payload';
import { AuthService } from '../../../services/auth.service';
import { MessageService } from 'primeng/api';

//#endregion

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private messageService: MessageService
  ) {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  //#region Public Properties

  public formGroup: FormGroup;

  public isLoading: boolean = false;

  //#endregion

  //#region Public Methods

  public async onSubmit(): Promise<void> {
    if (this.formGroup.invalid || this.isLoading) return;

    const payload: LoginPayload = this.formGroup.getRawValue();

    this.isLoading = true;

    try {
      await this.authService.login(payload.email, payload.password).subscribe({
        next: async () => await this.navigateToUsers(),
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Opss...',
            detail: 'Não foi possível logar: ' + error.message,
            life: 3000,
          });
        },
      });
    } catch (error: unknown) {
    } finally {
      this.isLoading = false;
    }
  }

  public async navigateToRegister(): Promise<void> {
    this.router.navigate(['register']);
  }

  public async navigateToUsers(): Promise<void> {
    this.router.navigate(['pages/users']);
  }

  //#endregion
}
