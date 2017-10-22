import { Routes } from '@angular/router';

import { TodoListComponent } from '../todolist/todo-list.component';
import { TodoDetailComponent } from '../tododetail/todo-detail.component';

export const routes: Routes = [
  { path: 'todolist', component: TodoListComponent },
  { path: 'tododetail/:id', component: TodoDetailComponent },
  { path: '', redirectTo: '/todolist', pathMatch: 'full' }
];