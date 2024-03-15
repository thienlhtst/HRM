import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionOptionsComponent } from './position-options.component';

describe('PositionUpdateComponent', () => {
  let component: PositionOptionsComponent;
  let fixture: ComponentFixture<PositionOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositionOptionsComponent]
    });
    fixture = TestBed.createComponent(PositionOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
