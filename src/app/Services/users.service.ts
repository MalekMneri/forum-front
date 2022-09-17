import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiRoute = environment.apiRoute;
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get(this.apiRoute + 'users');
  }
  activateUser(userId: number) {
    return this.http.post(this.apiRoute + 'validateUser/' + userId, {});
  }
}
