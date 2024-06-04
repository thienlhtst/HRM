import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerBetaComponent } from './spinner-beta.component';

describe('SpinnerBetaComponent', () => {
  let component: SpinnerBetaComponent;
  let fixture: ComponentFixture<SpinnerBetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerBetaComponent]
    });
    fixture = TestBed.createComponent(SpinnerBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
