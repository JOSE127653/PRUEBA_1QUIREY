import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarDetalleperfilComponent } from './insertar-detalleperfil.component';

describe('InsertarDetalleperfilComponent', () => {
  let component: InsertarDetalleperfilComponent;
  let fixture: ComponentFixture<InsertarDetalleperfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarDetalleperfilComponent]
    });
    fixture = TestBed.createComponent(InsertarDetalleperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
