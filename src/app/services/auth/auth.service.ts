import { Injectable } from '@angular/core';
import { HttpAsyncService } from '../http-async/http-async.service';
import { environment } from '../../../environments/environment';
import { LoginPayload } from '../../models/payloads/login.payload';
import { RegisterPayload } from '../../models/payloads/register.payload';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpAsyncService,
  ) {}

  public async login(payload: LoginPayload): Promise<void> {
    const { success } = await this.http.post<void>(
      environment.api.routes.auth.login,
      payload,
    );

    if (!success) {
      throw new Error(
        'Não foi possível realizar o login, tente novamente mais tarde.',
      );
    }
  }

  public async register(payload: RegisterPayload): Promise<void> {
    const { success } = await this.http.post<void>(
      environment.api.routes.auth.register,
      payload,
    );

    if (!success) {
      throw new Error(
        'Não foi possível criar sua conta, tente novamente mais tarde.',
      );
    }
  }
}
