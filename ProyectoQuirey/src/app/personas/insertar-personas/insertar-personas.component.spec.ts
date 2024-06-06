import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarPersonasComponent } from './insertar-personas.component';

describe('InsertarPersonasComponent', () => {
  let component: InsertarPersonasComponent;
  let fixture: ComponentFixture<InsertarPersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarPersonasComponent]
    });
    fixture = TestBed.createComponent(InsertarPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
