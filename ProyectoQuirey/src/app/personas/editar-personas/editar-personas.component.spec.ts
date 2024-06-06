import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPersonasComponent } from './editar-personas.component';

describe('EditarPersonasComponent', () => {
  let component: EditarPersonasComponent;
  let fixture: ComponentFixture<EditarPersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPersonasComponent]
    });
    fixture = TestBed.createComponent(EditarPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
