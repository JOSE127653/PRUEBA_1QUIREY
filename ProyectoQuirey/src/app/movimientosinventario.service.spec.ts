import { TestBed } from '@angular/core/testing';

import { MovimientosinventarioService } from './movimientosinventario.service';

describe('MovimientosinventarioService', () => {
  let service: MovimientosinventarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimientosinventarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
