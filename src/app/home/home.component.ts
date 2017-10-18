import { Component, OnInit, Inject } from '@angular/core';
import { Task } from '../shared/task';
import { TaskService} from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	tasks: Task[];

  constructor(private taskservice: TaskService,
  	          @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  	this.taskservice.getTasks()
  	  .subscribe(tasks => this.tasks = tasks);
  }

}
