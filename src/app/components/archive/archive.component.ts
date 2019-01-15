import { Component, OnInit } from '@angular/core';
import { ArchiveService } from '../../services/archive.service';
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

  archivedTasks : Task[] = [];

  code : number = 0;

  constructor( private archiveService:ArchiveService,
               private optionsService:OptionsService ) { }

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

  orderTasks( tasks : Task[], order : string ) : Task[] {
    switch (order) {
      case '0':
        return _.orderBy(tasks, ['deadline_date', 'deadline_time', function(x) { return x.important + x.urgent }], ['asc', 'asc', 'desc'] );
      case '1':
        return _.orderBy(tasks, [function(x) { return x.important + x.urgent }, 'deadline_date', 'deadline_time'], ['desc', 'asc', 'asc'] );
    }
  }

  getPriority( task:Task ) : number {
    return parseInt(task.urgent) + parseInt(task.important);
  }
  
}
