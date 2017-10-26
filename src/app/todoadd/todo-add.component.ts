import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TodoService } from '../services/todo.service';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoaddComponent implements OnInit {

	todo: Todo;
	todoForm: FormGroup;

  constructor( private todoservice: TodoService,
               private fb: FormBuilder,
               @Inject('BaseURL') private BaseURL) {

    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      date: '',
      isDown: false,
      priority: '',
      notes: '',
	  category: ''
    });
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
