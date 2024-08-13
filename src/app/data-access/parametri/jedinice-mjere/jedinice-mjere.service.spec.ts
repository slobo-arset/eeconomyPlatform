import { TestBed } from '@angular/core/testing';

import { JediniceMjereService } from './jedinice-mjere.service';

describe('JediniceMjereService', () => {
  let service: JediniceMjereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JediniceMjereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
