import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowanceOptionsComponent } from './allowance-options.component';

describe('AllowanceUpdateComponent', () => {
  let component: AllowanceOptionsComponent;
  let fixture: ComponentFixture<AllowanceOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllowanceOptionsComponent]
    });
    fixture = TestBed.createComponent(AllowanceOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
