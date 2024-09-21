import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
