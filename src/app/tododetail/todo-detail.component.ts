import { Component, OnInit, Inject, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TodoService } from '../services/todo.service';
import { Todo } from '../shared/todo';

import { Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnChanges {
  @Input() todo: Todo;

	
	todoIds: number[];
	todoForm: FormGroup;
	
  constructor(
    private todoservice: TodoService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) {

    this.createForm();
  }

  ngOnInit() {
  	this.todoservice.getTodoIds().subscribe(todoIds => this.todoIds = todoIds);
    this.route.params
      .switchMap((params: Params) => {
        return this.todoservice.getTodo(+params['id'])})
      .subscribe(todo => { this.todo = todo; });
  }

  createForm(): void {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      date: [''],
      completed: false,
      priority: 'green',
      notes: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)] ],
	  category: 'home'
    });

    
  }

  ngOnChanges() {
    this.todoForm.reset({
      title: this.todo.title
    })
  }

  

  onSubmit() {
  	this.todo = this.todoForm.value;
  	console.log(this.todo);
  	this.todoservice.submitTodo(this.todo)
  	  .subscribe(todo => {
  	  	console.log(todo);
  	  },
  	  () => {
  	  	console.log("There was an error saving");
  	  });
  }

  

}
