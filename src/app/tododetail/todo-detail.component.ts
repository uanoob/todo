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
  itemId: number;
	
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
      .subscribe(todo => { this.todo = todo;
                           this.itemId = this.todo.id;
                           console.log(this.todo.id);
                           this.todoForm.patchValue({
                             title: this.todo.title,
                             notes: this.todo.notes
                           });
                         } );

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

  

  onSubmit() {
  	this.todo = this.todoForm.value;
  	console.log(this.itemId);
  	this.todoservice.getTodos()
  	  .subscribe(todo => {
        this.todo.id = this.itemId;
  	  	console.log(this.itemId);
        console.log(this.todo.id);
        
        
  	  },
  	  () => {
  	  	console.log("There was an error saving");
  	  });

  }


  

}
