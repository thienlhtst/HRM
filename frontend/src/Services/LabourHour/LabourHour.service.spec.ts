/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LabourHourService } from './LabourHour.service';

describe('Service: LabourHour', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabourHourService]
    });
  });

  it('should ...', inject([LabourHourService], (service: LabourHourService) => {
    expect(service).toBeTruthy();
  }));
});
