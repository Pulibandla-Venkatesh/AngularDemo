import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (
  route : ActivatedRouteSnapshot, 
  state : RouterStateSnapshot) => {

  const authService = inject(AuthServiceService); // Inject the AuthService
  const isAuthenticated = authService.isauthenticated();

  return isAuthenticated;
};
