/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkhourStatisticsServiceService } from './WorkhourStatisticsService.service';

describe('Service: WorkhourStatisticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkhourStatisticsServiceService]
    });
  });

  it('should ...', inject([WorkhourStatisticsServiceService], (service: WorkhourStatisticsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
