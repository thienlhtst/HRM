import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryOptionsComponent } from './salary-options.component';

describe('SalaryUpdateComponent', () => {
  let component: SalaryOptionsComponent;
  let fixture: ComponentFixture<SalaryOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryOptionsComponent]
    });
    fixture = TestBed.createComponent(SalaryOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
