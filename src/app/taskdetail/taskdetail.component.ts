import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';

import { Task } from '../shared/task';


@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.scss']
})
export class TaskdetailComponent implements OnInit {

	taskForm: FormGroup;
	task: Task;

	formErrors = {
    'title': '',
    'notes': ''
    };

    validationMessages = {
    	'title': {
    		'required':      'Title is required.',
            'minlength':     'Title must be at least 2 characters long.',
            'maxlength':     'Title cannot be more than 25 characters long.'
        },
        'notes': {
    		'required':      'Title is required.',
            'minlength':     'Title must be at least 2 characters long.',
            'maxlength':     'Title cannot be more than 100 characters long.'
        },
    };


  constructor(private fb: FormBuilder,
  	          private taskservice: TaskService) {
  	          this.createForm();
  	           }

  ngOnInit() {}

  createForm(): void {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      date: [''],
      time: [''],
      completed: false,
      priority: 'green',
      notes: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)] ],
	  category: 'home'
    });

    this.taskForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  

  onSubmit() {
  	this.task = this.taskForm.value;
  	console.log(this.task);
  	this.taskservice.submitTask(this.task)
  	  .subscribe(task => {
  	  	console.log(task);
  	  },
  	  () => {
  	  	console.log("There was an error saving");
  	  });
  }

  onValueChanged(data?: any) {
    if (!this.taskForm) { return; }
    const form = this.taskForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

}
