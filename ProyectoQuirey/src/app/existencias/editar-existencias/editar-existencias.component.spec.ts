import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExistenciasComponent } from './editar-existencias.component';

describe('EditarExistenciasComponent', () => {
  let component: EditarExistenciasComponent;
  let fixture: ComponentFixture<EditarExistenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarExistenciasComponent]
    });
    fixture = TestBed.createComponent(EditarExistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
