import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarPuestosComponent } from './insertar-puestos.component';

describe('InsertarPuestosComponent', () => {
  let component: InsertarPuestosComponent;
  let fixture: ComponentFixture<InsertarPuestosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarPuestosComponent]
    });
    fixture = TestBed.createComponent(InsertarPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
