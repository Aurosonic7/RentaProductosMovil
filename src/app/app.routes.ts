import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'bienvenida', loadComponent: () => import('./pages/bienvenida/bienvenida.page').then( m => m.BienvenidaPage) },
  { path: 'login', loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage) },
  //{ path: 'register', loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage) },
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full', },
  { path: '', loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes), },
  {
    path: 'interfaz-productos',
    loadComponent: () => import('./pages/interfaz-productos/interfaz-productos.page').then( m => m.InterfazProductosPage)
  },
  { path: 'auth', loadComponent: () => import('./pages/auth/auth.page').then( m => m.AuthPage) },
  { path: 'admin/users', loadComponent: () => import('./admin/users/users.page').then( m => m.UsersPage)},
  { path: 'admin/posts', loadComponent: () => import('./admin/posts/posts.page').then( m => m.PostsPage)},
  { path: 'admin/comments', loadComponent: () => import('./admin/comments/comments.page').then( m => m.CommentsPage)},
  { path: 'admin/categories', loadComponent: () => import('./admin/categories/categories.page').then( m => m.CategoriesPage)},
  { path: 'admin/main', loadComponent: () => import('./admin/main/main.page').then( m => m.MainPage)},
  {
    path: 'interfaz-publicacion',
    loadComponent: () => import('./pages/interfaz-publicacion/interfaz-publicacion.page').then( m => m.InterfazPublicacionPage)
  },
];
