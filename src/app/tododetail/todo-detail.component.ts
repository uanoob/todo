import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';

import { Todo } from '../shared/todo';

import { Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

	
	todo: Todo;
	todoIds: number[];
	todoForm: FormGroup;
	errMess: string;

	formErrors = {
    'title': '',
    'notes': ''
    };

    validationMessages = {
    	'title': {
    		'required':      'Title is required.',
            'minlength':     'Title must be at least 2 characters long.',
            'maxlength':     'Title cannot be more than 25 characters long.'
        },
        'notes': {
    		'required':      'Title is required.',
            'minlength':     'Title must be at least 2 characters long.',
            'maxlength':     'Title cannot be more than 100 characters long.'
        },
    };


  constructor(private todoservice: TodoService,
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
      .subscribe(todo => { this.todo = todo; },
                errmess => { this.todo = null; this.errMess = <any>errmess;} );
  }

  createForm(): void {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      date: [''],
      time: [''],
      completed: false,
      priority: 'green',
      notes: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)] ],
	  category: 'home'
    });

    this.todoForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
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

  onValueChanged(data?: any) {
    if (!this.todoForm) { return; }
    const form = this.todoForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

}
