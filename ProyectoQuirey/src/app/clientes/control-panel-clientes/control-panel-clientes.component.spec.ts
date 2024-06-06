import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelClientesComponent } from './control-panel-clientes.component';

describe('ControlPanelClientesComponent', () => {
  let component: ControlPanelClientesComponent;
  let fixture: ComponentFixture<ControlPanelClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelClientesComponent]
    });
    fixture = TestBed.createComponent(ControlPanelClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
