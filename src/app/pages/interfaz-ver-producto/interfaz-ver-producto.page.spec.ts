import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfazVerProductoPage } from './interfaz-ver-producto.page';

describe('InterfazVerProductoPage', () => {
  let component: InterfazVerProductoPage;
  let fixture: ComponentFixture<InterfazVerProductoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazVerProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
