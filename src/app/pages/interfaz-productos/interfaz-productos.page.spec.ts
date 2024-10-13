import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfazProductosPage } from './interfaz-productos.page';

describe('InterfazProductosPage', () => {
  let component: InterfazProductosPage;
  let fixture: ComponentFixture<InterfazProductosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
