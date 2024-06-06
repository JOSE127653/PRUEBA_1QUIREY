import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelEmpleadosComponent } from './control-panel-empleados.component';

describe('ControlPanelEmpleadosComponent', () => {
  let component: ControlPanelEmpleadosComponent;
  let fixture: ComponentFixture<ControlPanelEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelEmpleadosComponent]
    });
    fixture = TestBed.createComponent(ControlPanelEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
