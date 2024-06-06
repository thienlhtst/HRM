import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemEmployeeComponent } from './nav-item-employee.component';

describe('NavItemEmployeeComponent', () => {
  let component: NavItemEmployeeComponent;
  let fixture: ComponentFixture<NavItemEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavItemEmployeeComponent]
    });
    fixture = TestBed.createComponent(NavItemEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
