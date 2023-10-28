import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-types';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor(private http: HttpClient) {}

  addProduct(data: Product) {
    return this.http.post(`http://localhost:3000/produtos`, data);
  }
}
