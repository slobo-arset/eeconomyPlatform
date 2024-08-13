import { TestBed } from '@angular/core/testing';

import { PorezneStopeService } from './porezne-stope.service';

describe('PorezneStopeService', () => {
  let service: PorezneStopeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorezneStopeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
