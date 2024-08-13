import { TestBed } from '@angular/core/testing';

import { PoslovniceService } from './poslovnice.service';

describe('PoslovniceService', () => {
  let service: PoslovniceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoslovniceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
