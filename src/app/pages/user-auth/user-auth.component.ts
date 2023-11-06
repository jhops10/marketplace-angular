import { Login } from './../../data-types';
import { Component, OnInit } from '@angular/core';
import { SignUp } from 'src/app/data-types';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
  userShowLogin: boolean = false;

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.userAuthReload();
  }

  signUp(data: SignUp) {
    this.service.userSignUp(data);
  }

  login(data: Login) {
    this.service.userLogin(data);
  }

  openLoginOrSignUp() {
    this.userShowLogin = !this.userShowLogin;
  }
}
