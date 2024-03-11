/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LabourdayAddoreditComponent } from './labourday-addoredit.component';

describe('LabourdayAddoreditComponent', () => {
  let component: LabourdayAddoreditComponent;
  let fixture: ComponentFixture<LabourdayAddoreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabourdayAddoreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourdayAddoreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
