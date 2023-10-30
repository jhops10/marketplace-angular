import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data-types';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-vendedor-home',
  templateUrl: './vendedor-home.component.html',
  styleUrls: ['./vendedor-home.component.css'],
})
export class VendedorHomeComponent implements OnInit {
  productList: undefined | Product[];
  productMessage: undefined | String;

  constructor(private service: ProdutosService) {}

  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id: number) {
    this.service.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Produto Deletado com Sucesso!';
        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }

  list() {
    this.service.productList().subscribe((result) => {
      if (result) {
        this.productList = result;
      }
    });
  }
}
