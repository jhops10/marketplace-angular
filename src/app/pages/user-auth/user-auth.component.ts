import { Component, OnInit } from '@angular/core';
import { SignUp } from 'src/app/data-types';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
  constructor(private service: UserService) {}

  ngOnInit(): void {}

  signUp(data: SignUp) {
    this.service.userSignUp(data);
  }
}
