import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarTicketsComponent } from './insertar-tickets.component';

describe('InsertarTicketsComponent', () => {
  let component: InsertarTicketsComponent;
  let fixture: ComponentFixture<InsertarTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarTicketsComponent]
    });
    fixture = TestBed.createComponent(InsertarTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
