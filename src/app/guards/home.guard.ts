import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let user = localStorage.getItem('user');
    if (user) {
      const role = JSON.parse(user).role;
      if (role === 'VALIDATOR') return this.router.createUrlTree(['/orders']);
      else if (role === 'FA') return this.router.createUrlTree(['/currencies']);
      else if (role === 'TA') return this.router.createUrlTree(['/my-orders']);
      else if (role === 'CLIENT')
        return this.router.createUrlTree(['/create-order']);
      else if (role === 'ADMINISTRATOR')
        return this.router.createUrlTree(['/orders']);
      else {
        console.log('role not found');
        return this.router.createUrlTree(['/login']);
      }
    } else {
      return this.router.createUrlTree(['/login']);
    }
  }
}
