import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarAlmacenesComponent } from './insertar-almacenes.component';

import { MatSnackBar } from '@angular/material/snack-bar';

 
describe('InsertarAlmacenesComponent', () => {
  let component: InsertarAlmacenesComponent;
  let fixture: ComponentFixture<InsertarAlmacenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarAlmacenesComponent]
    });
    fixture = TestBed.createComponent(InsertarAlmacenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

