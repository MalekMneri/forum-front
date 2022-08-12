import { AuthService } from './../../Services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  register(event: any, form: NgForm) {
    event.preventDefault();
    if (form.valid && form.value.password === form.value.Cpassword) {
      console.log('valid');
      form.value.role = 'CLIENT';
      this.auth.register(form.value);
    }
    console.log(form.value);
  }
}
