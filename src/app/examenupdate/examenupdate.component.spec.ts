import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenupdateComponent } from './examenupdate.component';

describe('ExamenupdateComponent', () => {
  let component: ExamenupdateComponent;
  let fixture: ComponentFixture<ExamenupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamenupdateComponent]
    });
    fixture = TestBed.createComponent(ExamenupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
