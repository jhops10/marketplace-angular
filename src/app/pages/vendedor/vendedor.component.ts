import { Component, OnInit } from '@angular/core';
import { VendedoresService } from 'src/app/services/vendedores.service';
import { Login, SignUp } from 'src/app/data-types';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css'],
})
export class VendedorComponent implements OnInit {
  constructor(private vendedoresService: VendedoresService) {}

  showLogin: boolean = false;

  ngOnInit(): void {
    this.vendedoresService.reloadSeller();
  }

  signUp(data: SignUp): void {
    this.vendedoresService.userSignUp(data);
  }

  login(data: Login): void {
    this.vendedoresService.userLogin(data);
  }

  openLoginOrSignUp() {
    this.showLogin = !this.showLogin;
  }
}
