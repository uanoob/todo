import { Routes } from '@angular/router';

import { TodoListComponent } from '../todolist/todo-list.component';
import { TodoDetailComponent } from '../tododetail/todo-detail.component';
import { TodoaddComponent } from '../todoadd/todo-add.component';

export const routes: Routes = [
  { path: 'todolist', component: TodoListComponent, data: { title: 'To Do List' } },
  { path: 'todoadd', component: TodoaddComponent, data: { title: 'To Do Add' } },
  { path: 'tododetail/:id', component: TodoDetailComponent, data: { title: 'To Do Detail' } },
  { path: '', redirectTo: '/todolist', pathMatch: 'full' }
];