import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDetalleticketsComponent } from './editar-detalletickets.component';

describe('EditarDetalleticketsComponent', () => {
  let component: EditarDetalleticketsComponent;
  let fixture: ComponentFixture<EditarDetalleticketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDetalleticketsComponent]
    });
    fixture = TestBed.createComponent(EditarDetalleticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
