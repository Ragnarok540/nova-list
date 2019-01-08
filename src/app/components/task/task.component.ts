import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task:Task = { 
	  code: null,
	  name: null,
	  description: null,
	  deadline_date: null,
	  deadline_time: null,
	  urgent: null,
	  important: null,
	  task_state: null
  }

  constructor( private router:Router,
               private taskService:TaskService ) { }

  ngOnInit() { }

  newTask( form:NgForm ) {

    this.taskService.newTask( form.value as Task ).subscribe( task => {
      this.router.navigate(['/board']);
    });

  }

}
