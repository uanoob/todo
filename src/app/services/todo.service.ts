import { Injectable } from '@angular/core';
import { Todo } from '../shared/todo';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class TodoService {

  constructor(private restangular: Restangular) { }

  submitTodo(todo: Todo): Observable<Todo[]> {
  	return this.restangular.all('todos').post(todo);
  }

  getTodos(): Observable<Todo[]> {
  	return this.restangular.all('todos').getList();
  }

  getTodo(id: number): Observable<Todo> {
  	return this.restangular.one('todos', id).get();
  }

  getTodoIds(): Observable<number[]> {
  	return this.getTodos()
  	.map(todos => { return todos.map(todo => todo.id) })
  	.catch(error => { return error; });
  }


}
