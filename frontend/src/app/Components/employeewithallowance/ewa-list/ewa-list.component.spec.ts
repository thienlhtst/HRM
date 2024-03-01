import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwaListComponent } from './ewa-list.component';

describe('EwaListComponent', () => {
  let component: EwaListComponent;
  let fixture: ComponentFixture<EwaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EwaListComponent]
    });
    fixture = TestBed.createComponent(EwaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
