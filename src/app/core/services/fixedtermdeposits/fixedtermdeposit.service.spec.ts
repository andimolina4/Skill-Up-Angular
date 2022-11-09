import { TestBed } from '@angular/core/testing';

import { FixedtermdepositService } from './fixedtermdeposit.service';

describe('FixedtermdepositService', () => {
  let service: FixedtermdepositService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixedtermdepositService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
