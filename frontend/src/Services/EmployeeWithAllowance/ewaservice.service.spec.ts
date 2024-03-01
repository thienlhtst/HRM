import { TestBed } from '@angular/core/testing';

import { EWAServiceService } from './ewaservice.service';

describe('EWAServiceService', () => {
  let service: EWAServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EWAServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
