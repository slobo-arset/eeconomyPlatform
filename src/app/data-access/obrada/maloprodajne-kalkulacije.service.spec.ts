import { TestBed } from '@angular/core/testing';

import { MaloprodajneKalkulacijeService } from './maloprodajne-kalkulacije.service';

describe('MaloprodajneKalkulacijeService', () => {
  let service: MaloprodajneKalkulacijeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaloprodajneKalkulacijeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
