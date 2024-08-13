import { TestBed } from '@angular/core/testing';

import { NapomeneService } from './napomene.service';

describe('NapomeneService', () => {
  let service: NapomeneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NapomeneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
