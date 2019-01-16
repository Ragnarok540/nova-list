import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../interfaces/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task:Task = { 
	code: null,
	name: null,
	description: null,
	deadline_date: null,
	deadline_time: null,
	urgent: null,
	important: null,
	task_state: null
  }

  @Output() taskSelected : EventEmitter<number>;

  constructor() { 
    this.taskSelected = new EventEmitter();
  }

  ngOnInit() {
    
  }

  getPriority( task:Task ) : number {
    return parseInt(task.urgent) + parseInt(task.important);
  }

  getTime( task: Task ) : Date {
    return new Date(0, 0, 0, parseInt(task.deadline_time.split(':')[0]), parseInt(task.deadline_time.split(':')[1]), 0, 0);
  }

  selectTask () {

    this.taskSelected.emit( this.task.code );

  }

}
