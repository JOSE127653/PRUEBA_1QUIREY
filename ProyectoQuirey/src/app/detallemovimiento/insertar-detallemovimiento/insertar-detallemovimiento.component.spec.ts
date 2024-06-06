import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarDetallemovimientoComponent } from './insertar-detallemovimiento.component';

describe('InsertarDetallemovimientoComponent', () => {
  let component: InsertarDetallemovimientoComponent;
  let fixture: ComponentFixture<InsertarDetallemovimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarDetallemovimientoComponent]
    });
    fixture = TestBed.createComponent(InsertarDetallemovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
