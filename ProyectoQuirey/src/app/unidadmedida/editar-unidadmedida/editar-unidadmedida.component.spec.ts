import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUnidadmedidaComponent } from './editar-unidadmedida.component';

describe('EditarUnidadmedidaComponent', () => {
  let component: EditarUnidadmedidaComponent;
  let fixture: ComponentFixture<EditarUnidadmedidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarUnidadmedidaComponent]
    });
    fixture = TestBed.createComponent(EditarUnidadmedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
