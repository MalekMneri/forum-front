import { User } from './../../../Models/User';
import { UsersService } from './../../../Services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  searchTerm = '';
  users: User[] = [];
  constructor(private userService: UsersService) {}
  search() {}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe((data: any) => {
      console.log(data);
      this.users = data;
    });
  }
  activateUser(id: number) {
    this.userService.activateUser(id).subscribe((data) => {
      console.log(data);
    });
    setTimeout(() => {
      this.getUsers();
    }, 1500);
  }
}
