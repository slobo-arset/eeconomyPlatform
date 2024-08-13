import { TestBed } from '@angular/core/testing';

import { KupciDobavljaciService } from './kupci-dobavljaci.service';

describe('KupciDobavljaciService', () => {
  let service: KupciDobavljaciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KupciDobavljaciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
