import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDeVentaComponent } from './punto-de-venta.component';

describe('PuntoDeVentaComponent', () => {
  let component: PuntoDeVentaComponent;
  let fixture: ComponentFixture<PuntoDeVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntoDeVentaComponent]
    });
    fixture = TestBed.createComponent(PuntoDeVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
