import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  // Manga
  getManga(): Observable<any> {
    return this.http.get(`${this.baseUrl}/manga/`);
  }

  getMangaDetail(slug: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/manga/${slug}/`);
  }

  // Genres
  getGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}/genres/`);
  }

  // Forum
  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/forum/`);
  }

  createPost(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/forum/`, data);
  }

  // Auth
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login/`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register/`, data);
  }
}