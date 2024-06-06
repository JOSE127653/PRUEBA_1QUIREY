import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarSucursalsedeComponent } from './insertar-sucursalsede.component';

describe('InsertarSucursalsedeComponent', () => {
  let component: InsertarSucursalsedeComponent;
  let fixture: ComponentFixture<InsertarSucursalsedeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarSucursalsedeComponent]
    });
    fixture = TestBed.createComponent(InsertarSucursalsedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
