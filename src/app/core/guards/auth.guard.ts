import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Get the current user from localStorage
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');

    // If the user is not logged in, navigate to the login page
    if (!user || !user.role) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    // Get the user's role
    const userRole = user.role;

    // Extract the expected role from the route (e.g., '/student', '/teacher', '/admin')
    const expectedRole = this.getRoleFromUrl(state.url);

    // If the user's role matches the expected role, allow access
    if (userRole === expectedRole) {
      return true;
    }

    // Otherwise, redirect the user to their default dashboard
    this.navigateBasedOnRole(userRole);
    return false;
  }

  // Determine role based on URL
  private getRoleFromUrl(url: string): string {
    if (url.startsWith('/student')) {
      return 'student';
    } else if (url.startsWith('/teacher')) {
      return 'teacher';
    } else if (url.startsWith('/admin')) {
      return 'admin';
    }
    return '';
  }

  // Navigate the user to their default dashboard based on role
  private navigateBasedOnRole(role: string): void {
    if (role === 'student') {
      this.router.navigate(['/student']);
    } else if (role === 'teacher') {
      this.router.navigate(['/teacher']);
    } else if (role === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/auth/login']); // Default to login if no valid role
    }
  }
}
