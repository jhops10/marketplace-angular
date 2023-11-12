import { Cart, Product } from './../../data-types';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css'],
})
export class DetalhesProdutoComponent implements OnInit {
  productData: undefined | Product;
  handleQtdProduct: number = 1;
  qtdProduct: number = this.handleQtdProduct;
  removeCart = false;
  cartData: Product | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private service: ProdutosService
  ) {}

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    productId &&
      this.service.getProduct(productId).subscribe((result) => {
        this.productData = result;

        let cartData = localStorage.getItem('localCart');
        if (productId && cartData) {
          let items = JSON.parse(cartData);
          items = items.filter(
            (item: Product) => productId === item.id.toString()
          );
          if (items.length) {
            this.removeCart = true;
          } else {
            this.removeCart = false;
          }
        }
        let user = localStorage.getItem('usuario');
        if (user) {
          let userId = user && JSON.parse(user).id;
          this.service.getCartList(userId);
          this.service.cartData.subscribe((result) => {
            let item = result.filter(
              (item: Product) =>
                productId?.toString() === item.productId?.toString()
            );
            if (item.length) {
              this.cartData = item[0];
              this.removeCart = true;
            }
          });
        }
      });
  }

  handleQuantity(action: string) {
    if (action == 'plus') {
      this.handleQtdProduct += 1;
    } else {
      if (this.handleQtdProduct > 1 && action === 'min') {
        this.handleQtdProduct -= 1;
      }
    }
  }

  addToCart() {
    if (this.productData) {
      this.productData.qtd = this.qtdProduct;
      if (!localStorage.getItem('usuario')) {
        this.service.localAddToCart(this.productData);
        this.removeCart = true;
      } else {
        let user = localStorage.getItem('usuario');
        let userId = user && JSON.parse(user).id;
        let cartData: Cart = {
          ...this.productData,
          userId,
          productId: this.productData.id,
        };
        delete cartData.id;
        this.service.addToCart(cartData).subscribe((result) => {
          if (result) {
            this.service.getCartList(userId);
            this.removeCart = true;
          }
        });
      }
    }
  }

  removeToCart(productId: number) {
    if (!localStorage.getItem('usuario')) {
      this.service.removeItemFromCart(productId);
    } else {
      let user = localStorage.getItem('usuario');
      let userId = user && JSON.parse(user).id;

      this.cartData &&
        this.service.removeToCart(this.cartData.id).subscribe((result) => {
          if (result) {
            this.service.getCartList(userId);
          }
        });
      this.removeCart = false;
    }
  }
}
