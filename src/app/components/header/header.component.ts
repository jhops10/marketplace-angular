import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  nomeVendedor: string = '';
  constructor(private route: Router) {}

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
}
