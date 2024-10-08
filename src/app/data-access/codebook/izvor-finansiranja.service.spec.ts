import { TestBed } from '@angular/core/testing';

import { IzvorFinansiranjaService } from './izvor-finansiranja.service';

describe('IzvorFinansiranjaService', () => {
  let service: IzvorFinansiranjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IzvorFinansiranjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
