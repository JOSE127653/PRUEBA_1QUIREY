import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriamodulosComponent } from './categoriamodulos.component';

describe('CategoriamodulosComponent', () => {
  let component: CategoriamodulosComponent;
  let fixture: ComponentFixture<CategoriamodulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriamodulosComponent]
    });
    fixture = TestBed.createComponent(CategoriamodulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
