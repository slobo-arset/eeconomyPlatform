import { TestBed } from '@angular/core/testing';

import { KontoKnjizenjaService } from './konto-knjizenja.service';

describe('KontoKnjizenjaService', () => {
  let service: KontoKnjizenjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KontoKnjizenjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
