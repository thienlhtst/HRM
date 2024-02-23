/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { RankServiceService } from './RankService.service';

describe('Service: RankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RankServiceService]
    });
  });

  it('should ...', inject([RankServiceService], (service: RankServiceService) => {
    expect(service).toBeTruthy();
  }));
});
