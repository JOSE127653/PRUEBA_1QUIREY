import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarArticulosComponent } from './insertar-articulos.component';

describe('InsertarArticulosComponent', () => {
  let component: InsertarArticulosComponent;
  let fixture: ComponentFixture<InsertarArticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarArticulosComponent]
    });
    fixture = TestBed.createComponent(InsertarArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

