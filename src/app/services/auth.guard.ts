import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.isLoggedIn) {
    return true; // User is authenticated, allow access
  } else {
    router.navigate(['/login']); // Redirect to login page if not authenticated
    return false;
  }
};
