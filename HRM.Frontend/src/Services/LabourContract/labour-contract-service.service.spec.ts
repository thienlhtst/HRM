import { TestBed } from '@angular/core/testing';

import { LabourContractServiceService } from './labour-contract-service.service';

describe('LabourContractServiceService', () => {
  let service: LabourContractServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabourContractServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
