/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LabourhourAddoreditComponent } from './labourhour-addoredit.component';

describe('LabourhourAddoreditComponent', () => {
  let component: LabourhourAddoreditComponent;
  let fixture: ComponentFixture<LabourhourAddoreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabourhourAddoreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourhourAddoreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
