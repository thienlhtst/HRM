/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { SalaryStatisticServiceService } from './SalaryStatisticService.service';

describe('Service: SalaryStatisticService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalaryStatisticServiceService]
    });
  });

  it('should ...', inject([SalaryStatisticServiceService], (service: SalaryStatisticServiceService) => {
    expect(service).toBeTruthy();
  }));
});
