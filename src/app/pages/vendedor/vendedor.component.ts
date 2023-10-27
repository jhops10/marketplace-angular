import { Component, OnInit } from '@angular/core';
import { VendedoresService } from 'src/app/services/vendedores.service';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/data-types';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css'],
})
export class VendedorComponent implements OnInit {
  constructor(
    private vendedoresService: VendedoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vendedoresService.reloadSeller();
  }

  signUp(data: SignUp): void {
    this.vendedoresService.userSignUp(data);
  }
}
