import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfazPagoProductoPage } from './interfaz-pago-producto.page';

describe('InterfazPagoProductoPage', () => {
  let component: InterfazPagoProductoPage;
  let fixture: ComponentFixture<InterfazPagoProductoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazPagoProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
