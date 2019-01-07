import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArchiveService } from '../../services/archive.service';
import { TaskDetailService } from '../../services/task-detail.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  archivedTasks:Task[] = [];

  code:number = 0;

  constructor( private archiveService:ArchiveService,
               private router:Router,
               private taskDetailService:TaskDetailService ) { }

  ngOnInit() {

    this.archiveService.getArchivedTasks().subscribe( tasks => {
      this.archivedTasks = tasks;
    });

  }

  selectTask ( code:number ) {
	this.code = code;
  }

  changeState( code:number , task_state:number ) {

    this.taskDetailService.changeState( code, task_state ).subscribe( task => {
      this.router.navigate(['/board']);
    });

  }

  deleteTask( code:number ) {

    this.archiveService.deleteTask( code ).subscribe( task => {
      this.router.navigate(['/board']);
    });

  }
  

}
