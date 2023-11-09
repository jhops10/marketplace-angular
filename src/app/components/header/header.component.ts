import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/data-types';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  nomeVendedor: string = '';
  searchResult: undefined | Product[];
  nomeUsuario: string = '';
  cartItems: number = 0;

  constructor(private route: Router, private service: ProdutosService) {}

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('vendedor') && val.url.includes('vendedor')) {
          this.menuType = 'vendedor';
          if (localStorage.getItem('vendedor')) {
            let vendedorStore = localStorage.getItem('vendedor');
            let vendedorData = vendedorStore && JSON.parse(vendedorStore)[0];
            this.nomeVendedor = vendedorData.name;
            this.menuType = 'vendedor';
          }
        } else if (localStorage.getItem('usuario')) {
          let userStore = localStorage.getItem('usuario');
          let userData = userStore && JSON.parse(userStore);
          this.nomeUsuario = userData.nome;
          this.menuType = 'usuario';
        } else {
          this.menuType = 'default';
        }
      }
    });

    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData).length;
    }

    this.service.cartData.subscribe((items) => {
      this.cartItems = items.length;
    });
  }

  logout() {
    localStorage.removeItem('vendedor');
    this.route.navigate(['/']);
  }

  userLogout() {
    localStorage.removeItem('usuario');
    this.route.navigate(['/user-auth']);
  }

  searchProducts(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.service.searchProducts(element.value).subscribe((result) => {
        if (result.length > 5) {
          result.length = 5;
        }
        this.searchResult = result;
      });
    }
  }

  hideSearch() {
    this.searchResult = undefined;
  }

  submitSearch(value: string) {
    this.route.navigate([`search/${value}`]);
  }
}
