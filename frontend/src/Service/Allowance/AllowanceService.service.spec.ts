/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllowanceServiceService } from './AllowanceService.service';

describe('Service: AllowanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllowanceServiceService]
    });
  });

  it('should ...', inject([AllowanceServiceService], (service: AllowanceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
