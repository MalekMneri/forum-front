import { AuthService } from './../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { navItems } from './nav-items';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  role = '';
  constructor(private auth: AuthService) {}
  navItems = navItems;
  ngOnInit(): void {
    let user = localStorage.getItem('user') || ' ';
    this.role = JSON.parse(user).role;
  }

  logout() {
    this.auth.logout();
  }
}
