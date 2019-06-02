import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { OptionsService } from '../../services/options.service';
import { Task } from '../../interfaces/task';
import { Options } from '../../interfaces/options';
import * as _ from 'lodash';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  order : Options = {
    option_name: 'order',
    option_value: '0'
  }

  pendingTasks:Task[] = [];

  inProgressTasks:Task[] = [];

  doneTasks:Task[] = [];

  constructor( private taskService:TaskService,
               private optionsService:OptionsService ) { }

  ngOnInit() {

    this.optionsService.getOption( 'order' ).subscribe( order => {
      this.order = order;
    });

    this.taskService.getPendingTasks().subscribe( tasks => {
      this.pendingTasks = this.orderTasks( tasks, this.order.option_value );
    });

    this.taskService.getInProgressTasks().subscribe( tasks => {
      this.inProgressTasks = this.orderTasks( tasks, this.order.option_value );
    });

    this.taskService.getDoneTasks().subscribe( tasks => {
      this.doneTasks = this.orderTasks( tasks, this.order.option_value );
    });

  }

  orderTasks( tasks : Task[], order : string ) : Task[] {
    switch (order) {
      case '0':
        return _.orderBy(tasks, 
                         ['deadline_date', 'deadline_time', function(x) { return x.important + x.urgent }], 
                         ['asc', 'asc', 'desc'] );
      case '1':
        return _.orderBy(tasks, 
                         [function(x) { return x.important + x.urgent }, 'deadline_date', 'deadline_time'], 
                         ['desc', 'asc', 'asc'] );
    }
  }

}
