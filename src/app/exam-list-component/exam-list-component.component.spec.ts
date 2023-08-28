import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamListComponentComponent } from './exam-list-component.component';

describe('ExamListComponentComponent', () => {
  let component: ExamListComponentComponent;
  let fixture: ComponentFixture<ExamListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamListComponentComponent]
    });
    fixture = TestBed.createComponent(ExamListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
