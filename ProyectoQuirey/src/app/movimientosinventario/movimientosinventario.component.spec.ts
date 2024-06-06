import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosinventarioComponent } from './movimientosinventario.component';

describe('MovimientosinventarioComponent', () => {
  let component: MovimientosinventarioComponent;
  let fixture: ComponentFixture<MovimientosinventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimientosinventarioComponent]
    });
    fixture = TestBed.createComponent(MovimientosinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
