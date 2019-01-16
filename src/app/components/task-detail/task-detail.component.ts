import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskDetailService } from '../../services/task-detail.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

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

  constructor( private activatedRoute:ActivatedRoute,
               private router:Router,
               private taskDetailService:TaskDetailService ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      
      this.taskDetailService.getTask( params['code'] ).subscribe( task => {

        this.task = task;

      });

    });

  }

  getPriority() : number {
    return parseInt(this.task.urgent) + parseInt(this.task.important);
  }

  getTime( task: Task ) : Date {
    return new Date(0, 0, 0, parseInt(task.deadline_time.split(':')[0]), parseInt(task.deadline_time.split(':')[1]), 0, 0);
  }

}
