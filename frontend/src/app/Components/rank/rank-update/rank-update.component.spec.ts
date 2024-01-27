import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankUpdateComponent } from './rank-update.component';

describe('RankUpdateComponent', () => {
  let component: RankUpdateComponent;
  let fixture: ComponentFixture<RankUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankUpdateComponent]
    });
    fixture = TestBed.createComponent(RankUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
