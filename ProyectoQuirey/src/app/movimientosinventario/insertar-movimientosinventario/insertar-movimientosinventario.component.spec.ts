import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarMovimientosinventarioComponent } from './insertar-movimientosinventario.component';

describe('InsertarMovimientosinventarioComponent', () => {
  let component: InsertarMovimientosinventarioComponent;
  let fixture: ComponentFixture<InsertarMovimientosinventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarMovimientosinventarioComponent]
    });
    fixture = TestBed.createComponent(InsertarMovimientosinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
