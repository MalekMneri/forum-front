import { AuthService } from './../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { navItems } from './nav-items';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService) {}
  navItems = navItems;
  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }
}
