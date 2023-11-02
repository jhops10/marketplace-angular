import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data-types';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularProducts?: Product[] | undefined;
  productList?: Product[] | undefined;

  constructor(private service: ProdutosService) {}

  ngOnInit(): void {
    this.service.popularProducts().subscribe((data) => {
      this.popularProducts = data;
    });

    this.service.productList().subscribe((data) => {
      this.productList = data;
    });
  }
}
