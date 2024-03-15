import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourcontractListComponent } from './labourcontract-list.component';

describe('LabourcontractListComponent', () => {
  let component: LabourcontractListComponent;
  let fixture: ComponentFixture<LabourcontractListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabourcontractListComponent]
    });
    fixture = TestBed.createComponent(LabourcontractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
