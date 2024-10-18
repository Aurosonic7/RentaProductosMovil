import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'bienvenida',
        loadComponent: () => 
          import('../pages/bienvenida/bienvenida.page').then((m) => m.BienvenidaPage),  
      },
      {
        path: 'interfaz-productos',
        loadComponent: () =>
          import('../pages/interfaz-productos/interfaz-productos.page').then((m) => m.InterfazProductosPage),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];
