import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  constructor() {}
  createCookie(name: any, value: any, timestamp?: any) {
    let expires = '';
    if (timestamp) {
      expires = '; expires=' + timestamp;
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }

  readCookie(name: any) {
    let nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  //check if JWT token in cookies is expired or not
  isTokenExpired() {
    var _token_data = this.parseJWT();
    var current_time = new Date().getTime() / 1000;
    // console.log(_token_data);
    if (_token_data.exp < current_time) {
      return true;
    } else {
      return false;
    }
  }

  eraseCookie(name: any) {
    this.createCookie(name, '', 'Thu, 01 Jan 1970 00:00:00 UTC');
  }

  parseJWT() {
    let token = this.readCookie('_token') || '';
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }
  createMemberCookies(data: any) {
    this.createCookie('_token', data.id_token, data.exp);
    let _token_data = this.parseJWT();

    this.createCookie('_token', data.id_token, _token_data.exp);
  }
  getUserId() {
    var _token_data = this.parseJWT();
    return _token_data.id;
  }
  //delete all cookies
  deleteAllCookies() {
    this.eraseCookie('_token');
  }
}
