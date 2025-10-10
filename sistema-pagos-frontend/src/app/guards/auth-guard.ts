import { AuthServices } from './../services/auth-services';
import { inject} from '@angular/core';
import { CanActivateFn, Router,UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export const authGuard: CanActivateFn=(route,state): Observable<boolean | UrlTree > | Promise <boolean | UrlTree > | boolean | UrlTree =>{
  const authServices = inject(AuthServices);
  const router=inject(Router);
  if(authServices.isAuthenticate){
    return true;
  }
  else{
    return router.createUrlTree(['/login']);
  }
}

