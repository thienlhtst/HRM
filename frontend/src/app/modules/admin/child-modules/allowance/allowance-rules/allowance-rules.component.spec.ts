import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowanceRulesComponent } from './allowance-rules.component';

describe('AllowanceRulesComponent', () => {
  let component: AllowanceRulesComponent;
  let fixture: ComponentFixture<AllowanceRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllowanceRulesComponent]
    });
    fixture = TestBed.createComponent(AllowanceRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
