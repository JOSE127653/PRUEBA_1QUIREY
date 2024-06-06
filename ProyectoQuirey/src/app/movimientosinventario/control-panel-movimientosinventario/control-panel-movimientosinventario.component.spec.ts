import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelMovimientosinventarioComponent } from './control-panel-movimientosinventario.component';

describe('ControlPanelMovimientosinventarioComponent', () => {
  let component: ControlPanelMovimientosinventarioComponent;
  let fixture: ComponentFixture<ControlPanelMovimientosinventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelMovimientosinventarioComponent]
    });
    fixture = TestBed.createComponent(ControlPanelMovimientosinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
