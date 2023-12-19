import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorHomeComponent } from './vendedor-home.component';

describe('VendedorHomeComponent', () => {
  let component: VendedorHomeComponent;
  let fixture: ComponentFixture<VendedorHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendedorHomeComponent]
    });
    fixture = TestBed.createComponent(VendedorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
