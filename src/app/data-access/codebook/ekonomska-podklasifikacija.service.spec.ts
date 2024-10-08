import { TestBed } from '@angular/core/testing';

import { EkonomskaPodklasifikacijaService } from './ekonomska-podklasifikacija.service';

describe('EkonomskaPodklasifikacijaService', () => {
  let service: EkonomskaPodklasifikacijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EkonomskaPodklasifikacijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
