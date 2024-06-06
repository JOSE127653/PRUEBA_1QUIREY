import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelArticulosComponent } from './control-panel-articulos.component';

describe('ControlPanelArticulosComponent', () => {
  let component: ControlPanelArticulosComponent;
  let fixture: ComponentFixture<ControlPanelArticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelArticulosComponent]
    });
    fixture = TestBed.createComponent(ControlPanelArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
