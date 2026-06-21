import { CanActivateFn, Router } from '@angular/router';
import { UserRole } from '../models/user.model';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export function roleGuard(allowedRoles: UserRole[]): CanActivateFn {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const role = authService.userRole();

    if (role && allowedRoles.includes(role)) {
      return true;
    }

    router.navigate(['/dashboard']);
    return false;
  };
}
