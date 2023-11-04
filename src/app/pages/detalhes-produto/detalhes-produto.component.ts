import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data-types';
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

  constructor(
    private activeRoute: ActivatedRoute,
    private service: ProdutosService
  ) {}

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    productId &&
      this.service.getProduct(productId).subscribe((result) => {
        this.productData = result;
      });
  }

  handleQuantity(action: string) {
    if (action == 'plus') {
      this.handleQtdProduct += 1;
    } else {
      if (this.handleQtdProduct > 1) {
        this.handleQtdProduct -= 1;
      }
    }
  }
}
