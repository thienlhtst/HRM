/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { WorkHourService } from './WorkHour.service';

describe('Service: WorkHour', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkHourService]
    });
  });

  it('should ...', inject([WorkHourService], (service: WorkHourService) => {
    expect(service).toBeTruthy();
  }));
});
