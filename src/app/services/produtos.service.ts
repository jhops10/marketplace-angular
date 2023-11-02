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

  productList() {
    return this.http.get<Product[]>(`http://localhost:3000/produtos`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/produtos/${id}`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`http://localhost:3000/produtos/${id}`);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(
      `http://localhost:3000/produtos/${product.id}`,
      product
    );
  }

  popularProducts() {
    return this.http.get<Product[]>(`http://localhost:3000/produtos?_limit=3`);
  }
}
