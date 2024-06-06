import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarDetalleticketsComponent } from './insertar-detalletickets.component';

describe('InsertarDetalleticketsComponent', () => {
  let component: InsertarDetalleticketsComponent;
  let fixture: ComponentFixture<InsertarDetalleticketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarDetalleticketsComponent]
    });
    fixture = TestBed.createComponent(InsertarDetalleticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
