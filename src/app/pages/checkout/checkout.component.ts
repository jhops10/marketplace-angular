import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, Order } from 'src/app/data-types';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  totalPrice: number | undefined;
  cartData: Cart[] | undefined;
  orderMsg: string | undefined;

  constructor(
    private productService: ProdutosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.currentCart().subscribe((result) => {
      let price = 0;
      this.cartData = result;
      result.forEach((item) => {
        if (item.qtd) {
          price += item.price * item.qtd;
        }
      });
      this.totalPrice = price;
    });
  }

  orderNow(data: {
    endereco: string;
    numero: string;
    bairro: string;
    cep: string;
  }) {
    let user = localStorage.getItem('usuario');
    let userId = user && JSON.parse(user).id;
    if (this.totalPrice) {
      let orderData: Order = {
        ...data,
        totalPrice: this.totalPrice,
        userId,
        id: undefined,
      };
      this.cartData?.forEach((item) => {
        setTimeout(() => {
          item.id && this.productService.deleteCartItems(item.id);
        }, 700);
      });
      this.productService.orderNow(orderData).subscribe((result) => {
        if (result) {
          this.orderMsg = 'Seu pedido foi realizado com sucesso!';
          setTimeout(() => {
            this.router.navigate(['/my-orders']);
            this.orderMsg = undefined;
          }, 4000);
        }
      });
    }
  }
}
