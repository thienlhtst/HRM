import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowancesemployeerulesAddComponent } from './allowancesemployeerules-add.component';

describe('AllowancesemployeerulesAddComponent', () => {
  let component: AllowancesemployeerulesAddComponent;
  let fixture: ComponentFixture<AllowancesemployeerulesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllowancesemployeerulesAddComponent]
    });
    fixture = TestBed.createComponent(AllowancesemployeerulesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
