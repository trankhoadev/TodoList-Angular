import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddComponentComponent } from './task-add-component.component';

describe('TaskAddComponentComponent', () => {
  let component: TaskAddComponentComponent;
  let fixture: ComponentFixture<TaskAddComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAddComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
