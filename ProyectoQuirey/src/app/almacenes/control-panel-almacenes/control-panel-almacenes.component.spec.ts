import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelAlmacenesComponent } from './control-panel-almacenes.component';

describe('ControlPanelAlmacenesComponent', () => {
  let component: ControlPanelAlmacenesComponent;
  let fixture: ComponentFixture<ControlPanelAlmacenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelAlmacenesComponent]
    });
    fixture = TestBed.createComponent(ControlPanelAlmacenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
