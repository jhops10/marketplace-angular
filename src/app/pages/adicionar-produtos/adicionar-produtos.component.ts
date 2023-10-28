import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data-types';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-adicionar-produtos',
  templateUrl: './adicionar-produtos.component.html',
  styleUrls: ['./adicionar-produtos.component.css'],
})
export class AdicionarProdutosComponent implements OnInit {
  addProductMessage: string | undefined;

  constructor(private productService: ProdutosService) {}

  ngOnInit(): void {}

  adicionarProduto(data: Product) {
    this.productService.addProduct(data).subscribe((result) => {
      if (result) {
        this.addProductMessage = 'Produto Cadastrado com Sucesso!';
      }
      setTimeout(() => (this.addProductMessage = undefined), 3000);
    });
  }
}
