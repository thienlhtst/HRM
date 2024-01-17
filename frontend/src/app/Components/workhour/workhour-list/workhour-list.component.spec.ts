import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkhourListComponent } from './workhour-list.component';


describe('WorkhourComponent', () => {
  let component: WorkhourListComponent;
  let fixture: ComponentFixture<WorkhourListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkhourListComponent]
    });
    fixture = TestBed.createComponent(WorkhourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
