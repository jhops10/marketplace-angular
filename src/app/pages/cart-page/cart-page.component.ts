import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, PriceSummary } from 'src/app/data-types';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cartData: Cart[] | undefined;
  priceSummary: PriceSummary = {
    price: 0,
    total: 0,
  };

  constructor(
    private productService: ProdutosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDetails();
  }

  deleteProduct(cartId: number | undefined) {
    this.cartData &&
      cartId &&
      this.productService.removeToCart(cartId).subscribe((result) => {
        this.loadDetails();
      });
  }

  loadDetails() {
    this.productService.currentCart().subscribe((result) => {
      this.cartData = result;
      let price = 0;
      result.forEach((item) => {
        if (item.qtd) {
          price += item.price * item.qtd;
        }
      });
      this.priceSummary.price = price;
      this.priceSummary.total += price;

      if (!this.cartData.length) {
        this.router.navigate(['/']);
      }
    });
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }
}
