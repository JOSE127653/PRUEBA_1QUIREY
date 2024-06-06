import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSucursalsedeComponent } from './editar-sucursalsede.component';

describe('EditarSucursalsedeComponent', () => {
  let component: EditarSucursalsedeComponent;
  let fixture: ComponentFixture<EditarSucursalsedeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSucursalsedeComponent]
    });
    fixture = TestBed.createComponent(EditarSucursalsedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
