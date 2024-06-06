import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarRutasComponent } from './insertar-rutas.component';

describe('InsertarRutasComponent', () => {
  let component: InsertarRutasComponent;
  let fixture: ComponentFixture<InsertarRutasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarRutasComponent]
    });
    fixture = TestBed.createComponent(InsertarRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
