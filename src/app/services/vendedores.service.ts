import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../data-types';

@Injectable({
  providedIn: 'root',
})
export class VendedoresService {
  constructor(private http: HttpClient) {}

  userSignUp(data: SignUp) {
    return this.http.post('http://localhost:3000/vendedores', data);
  }
}
