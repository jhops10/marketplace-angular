import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/data-types';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  orderData: Order[] | undefined;

  constructor(private productService: ProdutosService) {}

  ngOnInit(): void {
    this.productService.orderList().subscribe((result) => {
      this.orderData = result;
    });
  }

  cancelOrder(orderId: number | undefined) {
    orderId &&
      this.productService.cancelOrder(orderId).subscribe((result) => {
        this.getOrderList();
      });
  }

  getOrderList() {
    this.productService.orderList().subscribe((result) => {
      this.orderData = result;
    });
  }
}
