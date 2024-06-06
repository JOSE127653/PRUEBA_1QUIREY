import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarModulosusuarioComponent } from './editar-modulosusuario.component';

describe('EditarModulosusuarioComponent', () => {
  let component: EditarModulosusuarioComponent;
  let fixture: ComponentFixture<EditarModulosusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarModulosusuarioComponent]
    });
    fixture = TestBed.createComponent(EditarModulosusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
