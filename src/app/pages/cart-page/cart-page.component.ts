import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data-types';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  productList: Product[] | undefined;

  constructor(private productService: ProdutosService) {}
  ngOnInit(): void {
    this.productService.productList().subscribe((result) => {
      this.productList = result;
    });
  }

  deleteProduct(id: number) {
    console.log('deletou');
  }
}
