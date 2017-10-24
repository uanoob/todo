import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoaddComponent } from './todo-add.component';

describe('TodoaddComponent', () => {
  let component: TodoaddComponent;
  let fixture: ComponentFixture<TodoaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
