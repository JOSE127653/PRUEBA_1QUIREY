import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelTicketsComponent } from './control-panel-tickets.component';

describe('ControlPanelTicketsComponent', () => {
  let component: ControlPanelTicketsComponent;
  let fixture: ComponentFixture<ControlPanelTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelTicketsComponent]
    });
    fixture = TestBed.createComponent(ControlPanelTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
