import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGroupEmployeeComponent } from './nav-group-employee.component';

describe('NavGroupEmployeeComponent', () => {
  let component: NavGroupEmployeeComponent;
  let fixture: ComponentFixture<NavGroupEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavGroupEmployeeComponent]
    });
    fixture = TestBed.createComponent(NavGroupEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
