import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Catalog } from './pages/catalog/catalog';
import { MangaDetail } from './pages/manga-detail/manga-detail';
import { Popular } from './pages/popular/popular';
import { Genres } from './pages/genres/genres';
import { Forum } from './pages/forum/forum';
import { Reader } from './pages/reader/reader';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'catalog', component: Catalog },
  { path: 'popular', component: Popular },
  { path: 'genres', component: Genres },
  { path: 'forum', component: Forum },

  { path: 'login', component: Login },
  { path: 'register', component: Register },

  { path: 'read/:manga/:chapter', component: Reader },

  { path: 'manga/:id', component: MangaDetail },

  { path: 'profile', component: Profile },

  { path: '**', redirectTo: '' },
];