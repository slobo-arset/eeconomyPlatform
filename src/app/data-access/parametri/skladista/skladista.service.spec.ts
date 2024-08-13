import { TestBed } from '@angular/core/testing';

import { SkladistaService } from './skladista.service';

describe('SkladistaService', () => {
  let service: SkladistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkladistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
