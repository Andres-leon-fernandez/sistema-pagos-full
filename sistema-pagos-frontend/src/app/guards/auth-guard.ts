import { AuthServices } from './../services/auth-services';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class authGuard{
  constructor (private authServices:AuthServices,private router:Router){  
  }

CanActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<>boolean | UrlTree | {

  }
} 