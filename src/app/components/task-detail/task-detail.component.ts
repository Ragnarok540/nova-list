import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TaskDetailService } from '../../services/task-detail.service';
import { Task } from '../../interfaces/task';
// import { Urgency } from '../../enums/urgency.enum';
// import { Importance } from '../../enums/importance.enum';
// import { TaskState } from '../../enums/task-state.enum';

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

  showPending:boolean = false;
  showInProgress:boolean = false;
  showDone:boolean = false;
  showArchive:boolean = false;

  constructor( private activatedRoute:ActivatedRoute,
               private router:Router,
               private taskDetailService:TaskDetailService ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      
      this.taskDetailService.getTask( params['code'] ).subscribe( task => {

        this.task = task;

        switch (this.task.task_state) {
          case 0:
            this.showInProgress = true;
            this.showDone = true;
            break;
          case 1:
            this.showPending = true;
            this.showDone = true;
            break;
          case 2:
            this.showPending = true;
            this.showInProgress = true;
            this.showArchive = true;
            break;
        }
        
      });

    });

  }

  getPriority() : number {
    return parseInt(this.task.urgent) + parseInt(this.task.important);
  }

  changeState( code:number , task_state:number ) {

    this.taskDetailService.changeState( code, task_state ).subscribe( task => {
      this.router.navigate(['/board']);
    });

  }

  updateTask( task : Task ) {

    this.taskDetailService.updateTask( task ).subscribe( task => {
      this.router.navigate(['/board']);
    });

  }

}
