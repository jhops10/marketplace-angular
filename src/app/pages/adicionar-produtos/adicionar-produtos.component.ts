import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-produtos',
  templateUrl: './adicionar-produtos.component.html',
  styleUrls: ['./adicionar-produtos.component.css'],
})
export class AdicionarProdutosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  adicionarProduto(data: Object) {
    console.log(data);
  }
}
