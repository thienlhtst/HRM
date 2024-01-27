import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowanceUpdateComponent } from './allowance-update.component';

describe('AllowanceUpdateComponent', () => {
  let component: AllowanceUpdateComponent;
  let fixture: ComponentFixture<AllowanceUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllowanceUpdateComponent]
    });
    fixture = TestBed.createComponent(AllowanceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
