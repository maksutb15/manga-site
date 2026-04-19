import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { MangaDetail } from './pages/manga-detail/manga-detail';
import { Register } from './pages/register/register';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'manga/:id', component: MangaDetail },

  { path: '**', redirectTo: '' }
];