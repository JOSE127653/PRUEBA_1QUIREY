import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallemovimientoComponent } from './detallemovimiento.component';

describe('DetallemovimientoComponent', () => {
  let component: DetallemovimientoComponent;
  let fixture: ComponentFixture<DetallemovimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallemovimientoComponent]
    });
    fixture = TestBed.createComponent(DetallemovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
