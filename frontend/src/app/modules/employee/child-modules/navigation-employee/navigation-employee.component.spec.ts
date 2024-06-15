import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationEmployeeComponent } from './navigation-employee.component';

describe('NavigationEmployeeComponent', () => {
  let component: NavigationEmployeeComponent;
  let fixture: ComponentFixture<NavigationEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationEmployeeComponent]
    });
    fixture = TestBed.createComponent(NavigationEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
