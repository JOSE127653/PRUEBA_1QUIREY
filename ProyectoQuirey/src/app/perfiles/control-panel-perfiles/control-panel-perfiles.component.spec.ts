import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelPerfilesComponent } from './control-panel-perfiles.component';

describe('ControlPanelPerfilesComponent', () => {
  let component: ControlPanelPerfilesComponent;
  let fixture: ComponentFixture<ControlPanelPerfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelPerfilesComponent]
    });
    fixture = TestBed.createComponent(ControlPanelPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
