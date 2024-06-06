import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelUnidadmedidaComponent } from './control-panel-unidadmedida.component';

describe('ControlPanelUnidadmedidaComponent', () => {
  let component: ControlPanelUnidadmedidaComponent;
  let fixture: ComponentFixture<ControlPanelUnidadmedidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelUnidadmedidaComponent]
    });
    fixture = TestBed.createComponent(ControlPanelUnidadmedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
