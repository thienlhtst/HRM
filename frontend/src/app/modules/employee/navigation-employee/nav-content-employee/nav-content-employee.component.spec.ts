import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavContentEmployeeComponent } from './nav-content-employee.component';

describe('NavContentEmployeeComponent', () => {
  let component: NavContentEmployeeComponent;
  let fixture: ComponentFixture<NavContentEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavContentEmployeeComponent]
    });
    fixture = TestBed.createComponent(NavContentEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
