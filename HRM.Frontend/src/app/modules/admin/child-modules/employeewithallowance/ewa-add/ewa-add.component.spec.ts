import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwaAddComponent } from './ewa-add.component';

describe('EwaAddComponent', () => {
  let component: EwaAddComponent;
  let fixture: ComponentFixture<EwaAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EwaAddComponent]
    });
    fixture = TestBed.createComponent(EwaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
