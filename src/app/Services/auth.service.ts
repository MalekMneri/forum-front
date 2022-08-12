import { CookiesService } from './cookies.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authRoute: string;
  constructor(
    private http: HttpClient,
    private cookieService: CookiesService,
    private router: Router
  ) {
    this.authRoute = 'http://localhost:8081/';
  }
  login(credentials: any) {
    return this.http
      .post(this.authRoute + 'authenticate', credentials)
      .subscribe((data: any) => {
        console.log(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        this.cookieService.createMemberCookies(data);
        console.log(data.user.role);
        if (data.user.role !== 'ADMINISTRATOR')
          this.router.navigate(['/bestPractices']);
        else this.router.navigate(['/dashboard/bestPractices']);
      });
  }
  register(credentials: any) {
    return this.http
      .post('http://localhost:8081/register', credentials)
      .subscribe((data: any) => {
        this.cookieService.createMemberCookies(data);
        this.router.navigate(['/bestPractices']);
      });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.cookieService.readCookie('_token') !== null;
  }
}
