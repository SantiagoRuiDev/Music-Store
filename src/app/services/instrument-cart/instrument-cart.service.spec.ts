import { TestBed } from '@angular/core/testing';

import { InstrumentCartService } from './instrument-cart.service';

describe('InstrumentCartService', () => {
  let service: InstrumentCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstrumentCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
