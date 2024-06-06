import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadmedidaComponent } from './unidadmedida.component';

describe('UnidadmedidaComponent', () => {
  let component: UnidadmedidaComponent;
  let fixture: ComponentFixture<UnidadmedidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadmedidaComponent]
    });
    fixture = TestBed.createComponent(UnidadmedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
