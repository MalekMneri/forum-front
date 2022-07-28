import { CookiesService } from './cookies.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private cookieService: CookiesService,
    private router: Router
  ) {}
  login(credentials: any) {
    return this.http
      .post('http://localhost:8080/login', credentials)
      .subscribe((data: any) => {
        this.cookieService.createMemberCookies(data);
        this.router.navigate(['/bestPractices']);
      });
  }
  register(credentials: any) {
    return this.http
      .post('http://localhost:8080/register', credentials)
      .subscribe((data: any) => {
        this.cookieService.createMemberCookies(data);
        this.router.navigate(['/bestPractices']);
      });
  }

  logout() {
    this.cookieService.eraseCookie('_token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.cookieService.readCookie('_token') !== null;
  }
}
