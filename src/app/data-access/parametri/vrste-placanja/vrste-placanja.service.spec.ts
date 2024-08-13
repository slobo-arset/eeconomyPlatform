import { TestBed } from '@angular/core/testing';

import { VrstePlacanjaService } from './vrste-placanja.service';

describe('VrstePlacanjaService', () => {
  let service: VrstePlacanjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VrstePlacanjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
