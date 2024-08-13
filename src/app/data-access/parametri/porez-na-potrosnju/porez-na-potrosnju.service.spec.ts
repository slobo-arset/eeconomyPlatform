import { TestBed } from '@angular/core/testing';

import { PorezNaPotrosnjuService } from './porez-na-potrosnju.service';

describe('PorezNaPotrosnjuService', () => {
  let service: PorezNaPotrosnjuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorezNaPotrosnjuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
