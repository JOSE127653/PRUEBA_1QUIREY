import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelDetallemovimientoComponent } from './control-panel-detallemovimiento.component';

describe('ControlPanelDetallemovimientoComponent', () => {
  let component: ControlPanelDetallemovimientoComponent;
  let fixture: ComponentFixture<ControlPanelDetallemovimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelDetallemovimientoComponent]
    });
    fixture = TestBed.createComponent(ControlPanelDetallemovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
