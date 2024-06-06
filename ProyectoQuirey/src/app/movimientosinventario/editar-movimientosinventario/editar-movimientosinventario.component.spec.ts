import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMovimientosinventarioComponent } from './editar-movimientosinventario.component';

describe('EditarMovimientosinventarioComponent', () => {
  let component: EditarMovimientosinventarioComponent;
  let fixture: ComponentFixture<EditarMovimientosinventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarMovimientosinventarioComponent]
    });
    fixture = TestBed.createComponent(EditarMovimientosinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
