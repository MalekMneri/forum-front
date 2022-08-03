import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiRoute = 'http://localhost:8081/';
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get(this.apiRoute + 'users');
  }
  validateUser(id: string) {
    return this.http.post(this.apiRoute + 'validateUser/' + id, {});
  }
}
