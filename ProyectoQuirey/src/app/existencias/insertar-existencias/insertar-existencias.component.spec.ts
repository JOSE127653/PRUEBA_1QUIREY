import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarExistenciasComponent } from './insertar-existencias.component';

describe('InsertarExistenciasComponent', () => {
  let component: InsertarExistenciasComponent;
  let fixture: ComponentFixture<InsertarExistenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarExistenciasComponent]
    });
    fixture = TestBed.createComponent(InsertarExistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
