import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosGENERALComponent } from './movimientos-general.component';

describe('MovimientosGENERALComponent', () => {
  let component: MovimientosGENERALComponent;
  let fixture: ComponentFixture<MovimientosGENERALComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimientosGENERALComponent]
    });
    fixture = TestBed.createComponent(MovimientosGENERALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
