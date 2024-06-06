import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarCategoriamodulosComponent } from './insertar-categoriamodulos.component';

describe('InsertarCategoriamodulosComponent', () => {
  let component: InsertarCategoriamodulosComponent;
  let fixture: ComponentFixture<InsertarCategoriamodulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarCategoriamodulosComponent]
    });
    fixture = TestBed.createComponent(InsertarCategoriamodulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
