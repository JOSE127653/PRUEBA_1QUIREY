import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlmacenesComponent } from './editar-almacenes.component';

describe('EditarAlmacenesComponent', () => {
  let component: EditarAlmacenesComponent;
  let fixture: ComponentFixture<EditarAlmacenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAlmacenesComponent]
    });
    fixture = TestBed.createComponent(EditarAlmacenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

