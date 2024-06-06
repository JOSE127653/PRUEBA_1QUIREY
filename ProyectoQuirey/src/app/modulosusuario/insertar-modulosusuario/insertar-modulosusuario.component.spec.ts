import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarModulosusuarioComponent } from './insertar-modulosusuario.component';

describe('InsertarModulosusuarioComponent', () => {
  let component: InsertarModulosusuarioComponent;
  let fixture: ComponentFixture<InsertarModulosusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarModulosusuarioComponent]
    });
    fixture = TestBed.createComponent(InsertarModulosusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
