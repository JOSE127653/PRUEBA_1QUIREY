import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelPersonasComponent } from './control-panel-personas.component';

describe('ControlPanelPersonasComponent', () => {
  let component: ControlPanelPersonasComponent;
  let fixture: ComponentFixture<ControlPanelPersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelPersonasComponent]
    });
    fixture = TestBed.createComponent(ControlPanelPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
