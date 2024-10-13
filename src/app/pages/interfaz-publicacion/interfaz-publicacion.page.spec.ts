import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfazPublicacionPage } from './interfaz-publicacion.page';

describe('InterfazPublicacionPage', () => {
  let component: InterfazPublicacionPage;
  let fixture: ComponentFixture<InterfazPublicacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazPublicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
