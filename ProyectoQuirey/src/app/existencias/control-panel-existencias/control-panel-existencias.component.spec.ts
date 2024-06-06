import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelExistenciasComponent } from './control-panel-existencias.component';

describe('ControlPanelExistenciasComponent', () => {
  let component: ControlPanelExistenciasComponent;
  let fixture: ComponentFixture<ControlPanelExistenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelExistenciasComponent]
    });
    fixture = TestBed.createComponent(ControlPanelExistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
