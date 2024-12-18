import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    if (user.role === 'admin') this.router.navigate(['/admin']);
    if (user.role === 'teacher') this.router.navigate(['/teacher']);
    if (user.role === 'student') this.router.navigate(['/student']);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }

  getUserRole(): string {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role || '';
  }
}
