import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankAddComponent } from './rank-add.component';

describe('RankAddComponent', () => {
  let component: RankAddComponent;
  let fixture: ComponentFixture<RankAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankAddComponent]
    });
    fixture = TestBed.createComponent(RankAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
