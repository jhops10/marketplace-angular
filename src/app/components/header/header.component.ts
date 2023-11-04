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
          }
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('vendedor');
    this.route.navigate(['/']);
  }

  searchProducts(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.service.searchProducts(element.value).subscribe((result) => {
        this.searchResult = result;
      });
    }
  }
}
