import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelUsuariosComponent } from './control-panel-usuarios.component';

describe('ControlPanelUsuariosComponent', () => {
  let component: ControlPanelUsuariosComponent;
  let fixture: ComponentFixture<ControlPanelUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelUsuariosComponent]
    });
    fixture = TestBed.createComponent(ControlPanelUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
