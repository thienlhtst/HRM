import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowanceAddComponent } from './allowance-add.component';

describe('AllowanceAddComponent', () => {
  let component: AllowanceAddComponent;
  let fixture: ComponentFixture<AllowanceAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllowanceAddComponent]
    });
    fixture = TestBed.createComponent(AllowanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
