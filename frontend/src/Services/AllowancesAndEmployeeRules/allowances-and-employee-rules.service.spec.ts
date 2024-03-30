import { TestBed } from '@angular/core/testing';

import { AllowancesAndEmployeeRulesService } from './allowances-and-employee-rules.service';

describe('AllowancesAndEmployeeRulesService', () => {
  let service: AllowancesAndEmployeeRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllowancesAndEmployeeRulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
