import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Catalog } from './pages/catalog/catalog';
import { Forum } from './pages/forum/forum';
import { LoginComponent } from './pages/login/login.component';
import { Register } from './pages/register/register';
import { MangaDetailComponent } from './pages/manga-detail/manga-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: Catalog },
  { path: 'forum', component: Forum },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: Register },
  { path: 'manga/:id', component: MangaDetailComponent }
];