import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosusuarioComponent } from './modulosusuario.component';

describe('ModulosusuarioComponent', () => {
  let component: ModulosusuarioComponent;
  let fixture: ComponentFixture<ModulosusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulosusuarioComponent]
    });
    fixture = TestBed.createComponent(ModulosusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
