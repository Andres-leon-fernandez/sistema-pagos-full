import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServices } from '../services/auth-services';
import { inject } from '@angular/core';

export const authorizationGuard: CanActivateFn = (route, state): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const authServices = inject(AuthServices);
  const router = inject(Router);

  if (authServices.isAuthenticate) {
    let requiredRoles=route.data['roles'];
    let userRoles= authServices.roles;

    for(let role of userRoles){
      if(requiredRoles.includes(role)){
        return true;
      }
    }
  }
  return false;
};
