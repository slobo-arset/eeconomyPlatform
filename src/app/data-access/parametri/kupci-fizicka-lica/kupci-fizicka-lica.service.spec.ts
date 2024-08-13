import { TestBed } from '@angular/core/testing';

import { KupciFizickaLicaService } from './kupci-fizicka-lica.service';

describe('KupciFizickaLicaService', () => {
  let service: KupciFizickaLicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KupciFizickaLicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
