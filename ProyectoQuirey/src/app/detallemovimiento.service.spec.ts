import { TestBed } from '@angular/core/testing';

import { DetallemovimientoService } from './detallemovimiento.service';

describe('DetallemovimientoService', () => {
  let service: DetallemovimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallemovimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
