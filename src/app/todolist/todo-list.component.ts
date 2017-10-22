import { Component, OnInit, Inject } from '@angular/core';
import { Todo } from '../shared/todo';
import { TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

	todos: Todo[];
  selectedTodo: Todo;

  constructor(private todoservice: TodoService,
  	          @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  	this.todoservice.getTodos()
  	  .subscribe(todos => this.todos = todos);    
  }
  select(todo: Todo) {
        this.selectedTodo = todo;
      }

}
