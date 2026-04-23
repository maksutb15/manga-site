import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  getUsername(): string {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('username') || 'Account';
    }
    return 'Account';
  }

logout(): void {
  this.http.post(
    'http://127.0.0.1:8000/api/logout/',
    {},
  ).subscribe({
    next: () => this.finishLogout(),
    error: () => this.finishLogout()
  });
}

private finishLogout(): void {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  this.router.navigate(['/login']);
}

}
