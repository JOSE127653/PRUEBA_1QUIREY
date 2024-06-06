import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelCategoriamodulosComponent } from './control-panel-categoriamodulos.component';

describe('ControlPanelCategoriamodulosComponent', () => {
  let component: ControlPanelCategoriamodulosComponent;
  let fixture: ComponentFixture<ControlPanelCategoriamodulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelCategoriamodulosComponent]
    });
    fixture = TestBed.createComponent(ControlPanelCategoriamodulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
