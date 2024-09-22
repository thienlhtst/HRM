import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwaUpdateComponent } from './ewa-update.component';

describe('EwaUpdateComponent', () => {
  let component: EwaUpdateComponent;
  let fixture: ComponentFixture<EwaUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EwaUpdateComponent]
    });
    fixture = TestBed.createComponent(EwaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
