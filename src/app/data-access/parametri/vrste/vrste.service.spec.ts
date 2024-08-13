import { TestBed } from '@angular/core/testing';

import { VrsteService } from './vrste.service';

describe('VrsteService', () => {
  let service: VrsteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VrsteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
