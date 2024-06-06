import { TestBed } from '@angular/core/testing';

import { DetalleperfilService } from './detalleperfil.service';

describe('DetalleperfilService', () => {
  let service: DetalleperfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleperfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
