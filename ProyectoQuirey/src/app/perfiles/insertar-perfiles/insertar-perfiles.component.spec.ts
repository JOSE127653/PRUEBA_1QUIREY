import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarPerfilesComponent } from './insertar-perfiles.component';

describe('InsertarPerfilesComponent', () => {
  let component: InsertarPerfilesComponent;
  let fixture: ComponentFixture<InsertarPerfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarPerfilesComponent]
    });
    fixture = TestBed.createComponent(InsertarPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
