import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPuestosComponent } from './editar-puestos.component';

describe('EditarPuestosComponent', () => {
  let component: EditarPuestosComponent;
  let fixture: ComponentFixture<EditarPuestosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPuestosComponent]
    });
    fixture = TestBed.createComponent(EditarPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
