import { TestBed } from '@angular/core/testing';

import { PodizvorFinansiranjaService } from './podizvor-finansiranja.service';

describe('PodizvorFinansiranjaService', () => {
  let service: PodizvorFinansiranjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodizvorFinansiranjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
