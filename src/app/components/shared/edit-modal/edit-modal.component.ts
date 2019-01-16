import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskDetailService } from '../../../services/task-detail.service';
import { Task } from '../../../interfaces/task';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

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

  constructor( private router:Router,
               private taskDetailService:TaskDetailService ) { }

  ngOnInit() {
  }

  updateTask( task : Task ) {

    this.taskDetailService.updateTask( task ).subscribe( task => {
      this.router.navigate(['/board']);
    });

  }

}
