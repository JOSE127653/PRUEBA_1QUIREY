import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalsedeComponent } from './sucursalsede.component';

describe('SucursalsedeComponent', () => {
  let component: SucursalsedeComponent;
  let fixture: ComponentFixture<SucursalsedeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucursalsedeComponent]
    });
    fixture = TestBed.createComponent(SucursalsedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
