import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTicketsComponent } from './editar-tickets.component';

describe('EditarTicketsComponent', () => {
  let component: EditarTicketsComponent;
  let fixture: ComponentFixture<EditarTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTicketsComponent]
    });
    fixture = TestBed.createComponent(EditarTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
