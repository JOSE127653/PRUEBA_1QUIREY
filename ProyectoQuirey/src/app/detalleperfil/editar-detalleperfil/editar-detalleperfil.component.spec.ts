import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDetalleperfilComponent } from './editar-detalleperfil.component';

describe('EditarDetalleperfilComponent', () => {
  let component: EditarDetalleperfilComponent;
  let fixture: ComponentFixture<EditarDetalleperfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDetalleperfilComponent]
    });
    fixture = TestBed.createComponent(EditarDetalleperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
