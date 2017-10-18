import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { TaskdetailComponent } from '../taskdetail/taskdetail.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'taskdetail', component: TaskdetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];