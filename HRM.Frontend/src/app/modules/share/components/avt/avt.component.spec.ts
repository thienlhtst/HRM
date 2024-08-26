import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvtComponent } from './avt.component';

describe('AvtComponent', () => {
  let component: AvtComponent;
  let fixture: ComponentFixture<AvtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvtComponent]
    });
    fixture = TestBed.createComponent(AvtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
