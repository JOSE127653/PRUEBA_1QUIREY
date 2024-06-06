import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelModulosusuarioComponent } from './control-panel-modulosusuario.component';

describe('ControlPanelModulosusuarioComponent', () => {
  let component: ControlPanelModulosusuarioComponent;
  let fixture: ComponentFixture<ControlPanelModulosusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelModulosusuarioComponent]
    });
    fixture = TestBed.createComponent(ControlPanelModulosusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
