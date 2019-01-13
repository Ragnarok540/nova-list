import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
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

  //showSuccess:boolean = false;
  //showDanger:boolean = false;

  pendingTasks:Task[] = [];

  inProgressTasks:Task[] = [];

  doneTasks:Task[] = [];

  constructor( private boardService:BoardService,
               private optionsService:OptionsService ) { }

  ngOnInit() {

    this.optionsService.getOption( 'order' ).subscribe( order => {
      this.order = order;
    });

    this.boardService.getPendingTasks().subscribe( tasks => {
      this.pendingTasks = this.orderTasks( tasks, this.order.option_value );
    });

    this.boardService.getInProgressTasks().subscribe( tasks => {
      this.inProgressTasks = this.orderTasks( tasks, this.order.option_value );
    });

    this.boardService.getDoneTasks().subscribe( tasks => {
      this.doneTasks = this.orderTasks( tasks, this.order.option_value );
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

  getPriority( task:Task ) : number {
    return parseInt(task.urgent) + parseInt(task.important);
  }

}
