/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed, async } from '@angular/core/testing';


import { PagingnavComponent } from './pagingnav.component';

describe('PagingnavComponent', () => {
  let component: PagingnavComponent;
  let fixture: ComponentFixture<PagingnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
