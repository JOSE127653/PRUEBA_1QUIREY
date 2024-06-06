import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarUnidadmedidaComponent } from './insertar-unidadmedida.component';

describe('InsertarUnidadmedidaComponent', () => {
  let component: InsertarUnidadmedidaComponent;
  let fixture: ComponentFixture<InsertarUnidadmedidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarUnidadmedidaComponent]
    });
    fixture = TestBed.createComponent(InsertarUnidadmedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
