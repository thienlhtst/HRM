import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowancesemployeerulesListComponent } from './allowancesemployeerules-list.component';

describe('AllowancesemployeerulesListComponent', () => {
  let component: AllowancesemployeerulesListComponent;
  let fixture: ComponentFixture<AllowancesemployeerulesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllowancesemployeerulesListComponent]
    });
    fixture = TestBed.createComponent(AllowancesemployeerulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
