import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelDetalleticketsComponent } from './control-panel-detalletickets.component';

describe('ControlPanelDetalleticketsComponent', () => {
  let component: ControlPanelDetalleticketsComponent;
  let fixture: ComponentFixture<ControlPanelDetalleticketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelDetalleticketsComponent]
    });
    fixture = TestBed.createComponent(ControlPanelDetalleticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
