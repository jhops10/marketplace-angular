import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/data-types';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  totalPrice: number | undefined;

  constructor(private productService: ProdutosService) {}

  ngOnInit(): void {
    this.productService.currentCart().subscribe((result) => {
      let price = 0;
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
      };
      this.productService.orderNow(orderData).subscribe((result) => {
        if (result) {
          alert('Seu pedido foi realizado com sucesso!');
        }
      });
    }
  }
}
