import { TestBed } from '@angular/core/testing';

import { EfaktureService } from './efakture.service';

describe('EfaktureService', () => {
  let service: EfaktureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EfaktureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
