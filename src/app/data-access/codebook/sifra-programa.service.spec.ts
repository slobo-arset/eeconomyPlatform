import { TestBed } from '@angular/core/testing';

import { SifraProgramaService } from './sifra-programa.service';

describe('SifraProgramaService', () => {
  let service: SifraProgramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SifraProgramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
