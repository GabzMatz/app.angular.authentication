import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
    {
      path: 'pages',
      loadChildren: () =>
        import('./pages/pages.module').then((m) => m.PagesModule),
      canActivate: [AuthGuard]
    },
    {
      path: 'auth',
      loadChildren: () =>
        import('./pages/auth/auth.module').then((m) => m.AuthModule),
    },
    {
      path: 'register',
      loadChildren: () =>
        import('./pages/register/register.module').then((m) => m.RegisterModule),
    },
  
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: '**', redirectTo: 'auth', pathMatch: 'full' },
  ];