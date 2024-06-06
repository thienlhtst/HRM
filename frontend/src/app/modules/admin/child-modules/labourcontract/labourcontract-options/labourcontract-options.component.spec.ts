import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourcontractOptionsComponent } from './labourcontract-options.component';

describe('LabourcontractOptionsComponent', () => {
  let component: LabourcontractOptionsComponent;
  let fixture: ComponentFixture<LabourcontractOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabourcontractOptionsComponent]
    });
    fixture = TestBed.createComponent(LabourcontractOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
