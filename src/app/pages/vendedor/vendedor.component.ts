import { Component, OnInit } from '@angular/core';
import { VendedoresService } from 'src/app/services/vendedores.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css'],
})
export class VendedorComponent implements OnInit {
  constructor(private vendedoresService: VendedoresService) {}

  ngOnInit(): void {}

  signUp(data: Object): void {
    this.vendedoresService.userSignUp(data).subscribe((res) => {
      console.log(res);
    });
  }
}
