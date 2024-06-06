import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelModulosComponent } from './control-panel-modulos.component';

describe('ControlPanelModulosComponent', () => {
  let component: ControlPanelModulosComponent;
  let fixture: ComponentFixture<ControlPanelModulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelModulosComponent]
    });
    fixture = TestBed.createComponent(ControlPanelModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
