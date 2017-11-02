import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TodoService } from '../services/todo.service';
import { Todo } from '../shared/todo';

import { Params, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  private id: number;

  todo: Todo;
	todoIds: number[];
	todoForm: FormGroup;
	
  constructor(
    private todoservice: TodoService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) {

    this.createForm();
  }

  ngOnInit() {
  	
    this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
        console.log(this.id);
      });
      this.todoservice.getTodo(this.id)
        .subscribe(todo => {
          this.todo = todo;
          console.log(this.todo);
          this.todoForm.patchValue({
                             isComplete: this.todo.isComplete,
                             title: this.todo.title,
                             date: this.todo.date,
                             priority: this.todo.priority,
                             notes: this.todo.notes,
                             category: this.todo.category
                           });
        });
      }


  

  createForm(): void {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      date: [''],
      isComplete: false,
      priority: 'green',
      notes: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)] ],
	  category: 'home'
    });

    
  }

  

  onSave(todo: Todo) {
    console.log(this.todo);
    this.todo.isComplete = this.todoForm.value.isComplete;
  	this.todo.title = this.todoForm.value.title;
    this.todo.date = this.todoForm.value.date;
    this.todo.priority = this.todoForm.value.priority;
    this.todo.notes = this.todoForm.value.notes;
    this.todo.category = this.todoForm.value.category;
    console.log(this.todo);
  	this.todoservice.editTodo(this.todo)
  	  .subscribe(todo => {
        this.router.navigate(["/todolist"]);
        console.log(this.todo);
      },
      () => {
  	  	console.log("There was an error saving");
  	  });

  }

  onDelete(todo: Todo) {
    this.todoservice.deleteTodo(todo)
    .subscribe(todo => {
      this.router.navigate(["/todolist"]);
      console.log("Task delete");
    })
  }



  

}
