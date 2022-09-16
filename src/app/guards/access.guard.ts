import { navItems } from './../header/nav-items';
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
export class AccessGuard implements CanActivate {
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
      const item = navItems.find((item) => item.link === route.url[0].path);
      if (item?.users.includes(role)) {
        console.log('has access');
        return true;
      } else {
        console.log('does not have access');
        return this.router.createUrlTree(['/']);
      }
    } else {
      return this.router.createUrlTree(['/login']);
    }
    return true;
  }
}
