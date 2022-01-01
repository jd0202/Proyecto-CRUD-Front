import { TestBed } from '@angular/core/testing';

import { PacienteMedServiceService } from './personal-service.service';

describe('PacienteMedServiceService', () => {
  let service: PacienteMedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacienteMedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
