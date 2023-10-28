import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarProdutosComponent } from './adicionar-produtos.component';

describe('AdicionarProdutosComponent', () => {
  let component: AdicionarProdutosComponent;
  let fixture: ComponentFixture<AdicionarProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarProdutosComponent]
    });
    fixture = TestBed.createComponent(AdicionarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
