import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('frontend');

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('access');
    }
    return false;
  }

  getUsername(): string {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('username') || 'Account';
    }
    return 'Account';
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      this.http.post(
        'http://127.0.0.1:8000/api/logout/',
        {},
      ).subscribe({
        next: () => this.finishLogout(),
        error: () => this.finishLogout()
      });
    }
  }

  private finishLogout(): void {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
