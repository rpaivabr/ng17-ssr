import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', loadComponent: () => import('./post-list/post-list.component') },
    { path: 'posts/:slug', loadComponent: () => import('./post-detail/post-detail.component') },
];
