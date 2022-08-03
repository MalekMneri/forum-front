import { UsersService } from './../../Services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit {
  constructor(private serviceUsers: UsersService) {}
  users: any[] = [];
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.serviceUsers.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  validateUser(id: number) {
    this.serviceUsers.validateUser(id.toString()).subscribe(() => {
      this.getUsers();
    });
    setTimeout(() => {
      this.getUsers();
    }, 2000);
  }
}
