import { Injectable } from '@angular/core';
import { Login, SignUp } from '../data-types';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private route: Router) {}

  userSignUp(user: SignUp) {
    this.http
      .post('http://localhost:3000/usuarios', user, {
        observe: 'response',
      })
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('usuario', JSON.stringify(result.body));
          this.route.navigate(['/']);
        }
      });
  }

  userLogin(data: Login) {
    this.http
      .get<SignUp[]>(
        `http://localhost:3000/usuarios?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((result) => {
        if (result && result.body) {
          localStorage.setItem('usuario', JSON.stringify(result.body[0]));
          this.route.navigate(['/']);
        }
      });
  }

  userAuthReload() {
    if (localStorage.getItem('usuario')) {
      this.route.navigate(['/']);
    }
  }
}
