import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkhourComponent } from './workhour.component';

describe('WorkhourComponent', () => {
  let component: WorkhourComponent;
  let fixture: ComponentFixture<WorkhourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkhourComponent]
    });
    fixture = TestBed.createComponent(WorkhourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
