//#region Imports

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPayload } from '../../../models/payloads/login.payload';
import { AuthService } from '../../../services/auth/auth.service';

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
      await this.authService.login(payload);

      console.log('Sucesso!')
    } catch (error: unknown) {
      console.log('Error!')
    } finally {
      this.isLoading = false;
    }
  }

  public async navigateToRegister(): Promise<void> {
    this.router.navigate(['register']);
  }

  //#endregion
}
