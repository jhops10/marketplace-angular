import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorUpdateProdutoComponent } from './vendedor-update-produto.component';

describe('VendedorUpdateProdutoComponent', () => {
  let component: VendedorUpdateProdutoComponent;
  let fixture: ComponentFixture<VendedorUpdateProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendedorUpdateProdutoComponent]
    });
    fixture = TestBed.createComponent(VendedorUpdateProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
