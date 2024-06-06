import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleticketsComponent } from './detalletickets.component';

describe('DetalleticketsComponent', () => {
  let component: DetalleticketsComponent;
  let fixture: ComponentFixture<DetalleticketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleticketsComponent]
    });
    fixture = TestBed.createComponent(DetalleticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
