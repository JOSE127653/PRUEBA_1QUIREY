import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarClientesComponent } from './editar-clientes.component';

describe('EditarClientesComponent', () => {
  let component: EditarClientesComponent;
  let fixture: ComponentFixture<EditarClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarClientesComponent]
    });
    fixture = TestBed.createComponent(EditarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
