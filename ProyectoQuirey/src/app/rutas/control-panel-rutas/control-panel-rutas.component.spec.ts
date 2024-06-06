import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelRutasComponent } from './control-panel-rutas.component';

describe('ControlPanelRutasComponent', () => {
  let component: ControlPanelRutasComponent;
  let fixture: ComponentFixture<ControlPanelRutasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelRutasComponent]
    });
    fixture = TestBed.createComponent(ControlPanelRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
