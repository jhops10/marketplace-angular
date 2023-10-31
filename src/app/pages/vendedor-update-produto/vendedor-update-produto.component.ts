import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/data-types';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-vendedor-update-produto',
  templateUrl: './vendedor-update-produto.component.html',
  styleUrls: ['./vendedor-update-produto.component.css'],
})
export class VendedorUpdateProdutoComponent implements OnInit {
  productData: undefined | Product;
  productMessage: undefined | string;

  constructor(
    private route: ActivatedRoute,
    private service: ProdutosService
  ) {}

  ngOnInit(): void {
    let produtoId = this.route.snapshot.paramMap.get('id');
    produtoId &&
      this.service.getProduct(produtoId).subscribe((response) => {
        this.productData = response;
        console.log(response);
      });
  }

  editarProduto(data: Product) {
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.service.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productMessage = 'Produto Atualizado com Sucesso!';
      }
    });

    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }
}
