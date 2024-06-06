import { TestBed } from '@angular/core/testing';

import { CategoriamodulosService } from './categoriamodulos.service';

describe('CategoriamodulosService', () => {
  let service: CategoriamodulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriamodulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
