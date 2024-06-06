import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCollapseEmployeeComponent } from './nav-collapse-employee.component';

describe('NavCollapseEmployeeComponent', () => {
  let component: NavCollapseEmployeeComponent;
  let fixture: ComponentFixture<NavCollapseEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavCollapseEmployeeComponent]
    });
    fixture = TestBed.createComponent(NavCollapseEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
