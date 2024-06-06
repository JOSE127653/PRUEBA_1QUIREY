import { TestBed } from '@angular/core/testing';

import { ModulosusuarioService } from './modulosusuario.service';

describe('ModulosusuarioService', () => {
  let service: ModulosusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModulosusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
