import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankOptionsComponent } from './rank-options.component';

describe('RankUpdateComponent', () => {
  let component: RankOptionsComponent;
  let fixture: ComponentFixture<RankOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankOptionsComponent]
    });
    fixture = TestBed.createComponent(RankOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
