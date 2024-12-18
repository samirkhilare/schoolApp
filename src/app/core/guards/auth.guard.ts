import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');

  
    if (!user || !user.role) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    const userRole = user.role;

    const expectedRole = this.getRoleFromUrl(state.url);

    if (userRole === expectedRole) {
      return true;
    }

    this.navigateBasedOnRole(userRole);
    return false;
  }

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


  private navigateBasedOnRole(role: string): void {
    if (role === 'student') {
      this.router.navigate(['/student']);
    } else if (role === 'teacher') {
      this.router.navigate(['/teacher']);
    } else if (role === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/auth/login']); 
    }
  }
}
