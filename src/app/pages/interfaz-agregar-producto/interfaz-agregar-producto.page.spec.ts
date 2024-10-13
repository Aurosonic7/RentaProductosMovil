import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfazAgregarProductoPage } from './interfaz-agregar-producto.page';

describe('InterfazAgregarProductoPage', () => {
  let component: InterfazAgregarProductoPage;
  let fixture: ComponentFixture<InterfazAgregarProductoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazAgregarProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
