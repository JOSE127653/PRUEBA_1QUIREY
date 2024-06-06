import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelSucursalsedeComponent } from './control-panel-sucursalsede.component';

describe('ControlPanelSucursalsedeComponent', () => {
  let component: ControlPanelSucursalsedeComponent;
  let fixture: ComponentFixture<ControlPanelSucursalsedeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelSucursalsedeComponent]
    });
    fixture = TestBed.createComponent(ControlPanelSucursalsedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
