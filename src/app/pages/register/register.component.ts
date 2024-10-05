import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterPayload } from '../../models/payloads/register.payload';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private messageService: MessageService,
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
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

    const payload: RegisterPayload = this.formGroup.getRawValue();

    this.isLoading = true;

    try {
      await this.authService.signup(payload.name, payload.email, payload.password).subscribe({
        next: () => this.navigateToLogin(),
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Opss...',
            detail: 'Erro ao criar usuário: ' + error.message,
            life: 3000,
          });
        }
      });
    } catch (error: unknown) {
      if (error instanceof Error) alert(error.message);
    } finally {
      this.isLoading = false;
    }
  }

  public async navigateToLogin(): Promise<void> {
    this.router.navigate(['auth']);
  }

  //#endregion

}
