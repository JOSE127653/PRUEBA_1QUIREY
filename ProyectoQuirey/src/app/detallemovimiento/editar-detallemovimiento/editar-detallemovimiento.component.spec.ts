import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDetallemovimientoComponent } from './editar-detallemovimiento.component';

describe('EditarDetallemovimientoComponent', () => {
  let component: EditarDetallemovimientoComponent;
  let fixture: ComponentFixture<EditarDetallemovimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDetallemovimientoComponent]
    });
    fixture = TestBed.createComponent(EditarDetallemovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
