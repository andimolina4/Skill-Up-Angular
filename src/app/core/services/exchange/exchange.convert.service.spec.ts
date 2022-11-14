import { TestBed } from '@angular/core/testing';

import { ExchangeConvertService } from './exchange.convert.service';

describe('ExchangeConvertService', () => {
  let service: ExchangeConvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeConvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
