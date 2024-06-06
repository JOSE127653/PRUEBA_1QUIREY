import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarModulosComponent } from './insertar-modulos.component';

describe('InsertarModulosComponent', () => {
  let component: InsertarModulosComponent;
  let fixture: ComponentFixture<InsertarModulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarModulosComponent]
    });
    fixture = TestBed.createComponent(InsertarModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
