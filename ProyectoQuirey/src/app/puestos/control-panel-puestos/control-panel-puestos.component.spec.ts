import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelPuestosComponent } from './control-panel-puestos.component';

describe('ControlPanelPuestosComponent', () => {
  let component: ControlPanelPuestosComponent;
  let fixture: ComponentFixture<ControlPanelPuestosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelPuestosComponent]
    });
    fixture = TestBed.createComponent(ControlPanelPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
