import { TestBed } from '@angular/core/testing';

import { SucursalsedeService } from './sucursalsede.service';

describe('SucursalsedeService', () => {
  let service: SucursalsedeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SucursalsedeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
