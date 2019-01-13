import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArchiveService } from '../../services/archive.service';
import { TaskDetailService } from '../../services/task-detail.service';
import { OptionsService } from '../../services/options.service';
import { Task } from '../../interfaces/task';
import { Options } from '../../interfaces/options';
import * as _ from 'lodash';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  order : Options = {
    option_name: 'order',
    option_value: '0'
  }

  archivedTasks:Task[] = [];

  code:number = 0;

  constructor( private archiveService:ArchiveService,
               private router:Router,
               private optionsService:OptionsService,
               private taskDetailService:TaskDetailService ) { }

  ngOnInit() {

    this.optionsService.getOption( 'order' ).subscribe( order => {
      this.order = order;
    });

    this.archiveService.getArchivedTasks().subscribe( tasks => {
      this.archivedTasks = this.orderTasks( tasks, this.order.option_value );
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

  orderTasks( tasks : Task[], order : string ) : Task[] {
    switch (order) {
      case '0':
        return _.orderBy(tasks, ['deadline_date', 'deadline_time', function(x) { return x.important + x.urgent }], ['asc', 'asc', 'desc'] );
      case '1':
        return _.orderBy(tasks, [function(x) { return x.important + x.urgent }, 'deadline_date', 'deadline_time'], ['desc', 'asc', 'asc'] );
    }
  }
  

}
