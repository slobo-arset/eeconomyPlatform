import { TestBed } from '@angular/core/testing';

import { SifraProjektaService } from './sifra-projekta.service';

describe('SifraProjektaService', () => {
  let service: SifraProjektaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SifraProjektaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
