import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCategoriamodulosComponent } from './editar-categoriamodulos.component';

describe('EditarCategoriamodulosComponent', () => {
  let component: EditarCategoriamodulosComponent;
  let fixture: ComponentFixture<EditarCategoriamodulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCategoriamodulosComponent]
    });
    fixture = TestBed.createComponent(EditarCategoriamodulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
