import { Injectable } from '@angular/core';
import { Task } from '../shared/task';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class TaskService {

  constructor(private restangular: Restangular) { }

  getTasks(): Observable<Task[]> {
  	return this.restangular.all('tasks').getList();
  }

}
