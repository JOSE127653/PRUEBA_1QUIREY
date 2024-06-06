import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleperfilComponent } from './detalleperfil.component';

describe('DetalleperfilComponent', () => {
  let component: DetalleperfilComponent;
  let fixture: ComponentFixture<DetalleperfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleperfilComponent]
    });
    fixture = TestBed.createComponent(DetalleperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
