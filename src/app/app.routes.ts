import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/home/home.component').then(
        (module) => module.HomeComponent
      );
    },
  },
  {
    path: 'todo',
    loadComponent: () => {
      return import('./pages/todo/todo.component').then(
        (module) => module.TodoComponent
      );
    },
  },
];
