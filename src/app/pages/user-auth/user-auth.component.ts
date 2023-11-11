import { Cart, Login, Product } from './../../data-types';
import { Component, OnInit } from '@angular/core';
import { SignUp } from 'src/app/data-types';
import { ProdutosService } from 'src/app/services/produtos.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
  userShowLogin: boolean = false;
  authError: string = '';

  constructor(
    private service: UserService,
    private productService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.service.userAuthReload();
  }

  signUp(data: SignUp) {
    this.service.userSignUp(data);
  }

  login(data: Login) {
    this.service.userLogin(data);
    this.service.invalidUserAuth.subscribe((result) => {
      if (result) {
        this.authError = 'Usuário não Encontrado';
      } else {
        this.localCartToRemoveCart();
      }
    });
  }

  openLoginOrSignUp() {
    this.userShowLogin = !this.userShowLogin;
  }

  localCartToRemoveCart() {
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('usuario');
    let userId = user && JSON.parse(user).id;
    if (data) {
      let cartDataList: Product[] = JSON.parse(data);

      cartDataList.forEach((product: Product, index) => {
        let cartData: Cart = {
          ...product,
          productId: product.id,
          userId,
        };
        delete cartData.id;
        setTimeout(() => {
          this.productService.addToCart(cartData).subscribe((result) => {
            if (result) {
              console.log('Dados Salvos no Banco de Dados');
            }
          });
        }, 500);
        if (cartDataList.length === index + 1) {
          localStorage.removeItem('localCart');
        }
      });
    }
    setTimeout(() => {
      this.productService.getCartList(userId);
    }, 2000);
  }
}
