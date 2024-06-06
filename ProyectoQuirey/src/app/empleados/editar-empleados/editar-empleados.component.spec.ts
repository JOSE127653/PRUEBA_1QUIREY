import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEmpleadosComponent } from './editar-empleados.component';

describe('EditarEmpleadosComponent', () => {
  let component: EditarEmpleadosComponent;
  let fixture: ComponentFixture<EditarEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEmpleadosComponent]
    });
    fixture = TestBed.createComponent(EditarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
