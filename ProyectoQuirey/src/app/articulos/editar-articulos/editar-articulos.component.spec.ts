import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarArticulosComponent } from './editar-articulos.component';

describe('EditarArticulosComponent', () => {
  let component: EditarArticulosComponent;
  let fixture: ComponentFixture<EditarArticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarArticulosComponent]
    });
    fixture = TestBed.createComponent(EditarArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
