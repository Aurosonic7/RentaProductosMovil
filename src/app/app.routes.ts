import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'bienvenida', loadComponent: () => import('./pages/bienvenida/bienvenida.page').then( m => m.BienvenidaPage) },
  { path: 'login', loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage) },
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full', },
  { path: '', loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes), },
];
