import { TestBed } from '@angular/core/testing';

import { DetalleticketsService } from './detalletickets.service';

describe('DetalleticketsService', () => {
  let service: DetalleticketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleticketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
