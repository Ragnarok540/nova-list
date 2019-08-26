import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../../services/task.service';
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
    task_state: null,
    estimate: null,
    unit: null
  }

  fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34];
  units = [0, 1, 2, 3, 4];

  constructor( private router:Router,
               private taskService:TaskService ) { }

  ngOnInit() { }

  updateTask( task : Task ) {

    this.taskService.updateTask( task ).subscribe( task => {
      this.router.navigate(['/board']);
    });

  }

  unitSelected(unit) {
    switch (unit) {
      case "0": this.fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34];
        break;
      case "1": this.fibonacci = [0, 1, 2, 3, 5, 8];
        break;
      case "2": this.fibonacci = [0, 1, 2, 3, 5];
        break;
      case "3": this.fibonacci = [0, 1, 2, 3];
        break;
      case "4": this.fibonacci = [0, 1];
        break;
    }
    this.task.estimate = 0;
  }

}
