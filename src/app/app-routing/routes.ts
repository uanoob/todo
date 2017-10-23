import { Routes } from '@angular/router';

import { TodoListComponent } from '../todolist/todo-list.component';
import { TodoDetailComponent } from '../tododetail/todo-detail.component';

export const routes: Routes = [
  { path: 'todolist', component: TodoListComponent, data: { title: 'To Do List' } },
  { path: 'tododetail/:id', component: TodoDetailComponent, data: { title: 'To Do Detail' } },
  { path: '', redirectTo: '/todolist', pathMatch: 'full' }
];