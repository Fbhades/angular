// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../app/Service/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const expectedRole = (next.data as any).expectedRole as string;

    if (!this.authService.isAuthenticated() || this.authService.getUserRole() !== expectedRole) {
      this.router.navigate(['Home']);
      return false;
    }

    return true;
  }
}

