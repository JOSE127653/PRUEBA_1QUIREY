import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelDetalleperfilComponent } from './control-panel-detalleperfil.component';

describe('ControlPanelDetalleperfilComponent', () => {
  let component: ControlPanelDetalleperfilComponent;
  let fixture: ComponentFixture<ControlPanelDetalleperfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelDetalleperfilComponent]
    });
    fixture = TestBed.createComponent(ControlPanelDetalleperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
