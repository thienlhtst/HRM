import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionUpdateComponent } from './position-update.component';

describe('PositionUpdateComponent', () => {
  let component: PositionUpdateComponent;
  let fixture: ComponentFixture<PositionUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositionUpdateComponent]
    });
    fixture = TestBed.createComponent(PositionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
