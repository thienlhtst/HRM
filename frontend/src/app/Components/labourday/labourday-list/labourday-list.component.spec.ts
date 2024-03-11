/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LabourdayListComponent } from './labourday-list.component';

describe('LabourdayListComponent', () => {
  let component: LabourdayListComponent;
  let fixture: ComponentFixture<LabourdayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabourdayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourdayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
