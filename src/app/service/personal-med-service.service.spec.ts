import { TestBed } from '@angular/core/testing';

import { PersonalMedService } from './personal-med-service.service';

describe('PacienteMedServiceService', () => {
  let service: PersonalMedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalMedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
