import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiRoute = environment.apiRoute;
  constructor(private http: HttpClient, private router: Router) {}
  login(credentials: any) {
    return this.http
      .post(this.apiRoute + 'authenticate', credentials)
      .subscribe((data: any) => {
        console.log(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        console.log(data.user.role);
        this.router.navigate(['/']);
      });
  }
  register(credentials: any) {
    console.log(credentials);
    return this.http
      .post(this.apiRoute + 'add-user', credentials)
      .subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['/login']);
      });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
