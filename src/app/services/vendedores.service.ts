import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../data-types';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class VendedoresService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  userSignUp(data: SignUp) {
    this.http
      .post('http://localhost:3000/vendedores', data, { observe: 'response' })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('vendedor', JSON.stringify(result.body));
        this.router.navigate(['vendedor-home']);
      });
  }
  reloadSeller() {
    if (localStorage.getItem('vendedor')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['vendedor-home']);
    }
  }
}
