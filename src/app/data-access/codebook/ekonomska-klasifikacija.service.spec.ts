import { TestBed } from '@angular/core/testing';

import { EkonomskaKlasifikacijaService } from './ekonomska-klasifikacija.service';

describe('EkonomskaKlasifikacijaService', () => {
  let service: EkonomskaKlasifikacijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EkonomskaKlasifikacijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
