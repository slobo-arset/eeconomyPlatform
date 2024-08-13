import { TestBed } from '@angular/core/testing';

import { BankeService } from './banke.service';

describe('BankeService', () => {
  let service: BankeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
