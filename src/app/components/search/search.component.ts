import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { OptionsService } from '../../services/options.service';
import { Task } from '../../interfaces/task';
import { Options } from '../../interfaces/options';
import * as _ from 'lodash';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  order : Options = {
    option_name: 'order',
    option_value: '0'
  }

  tasks : Task[] = [];
  tasksTemp : Task[] = [];

  code : number = 0;
  state : number = 0;

  constructor( private searchService:SearchService,
               private activatedRoute:ActivatedRoute,
               private optionsService:OptionsService ) { }

  ngOnInit() {

    this.optionsService.getOption( 'order' ).subscribe( order => {
      this.order = order;
    });

    this.activatedRoute.params.subscribe( params => {

      this.searchService.getTasks().subscribe( tasks => {
        this.tasksTemp = _.filter(tasks, function(x) { 
          return x.name.toLowerCase().includes(params['term']) || x.description.toLowerCase().includes(params['term']);
        });
        this.tasks = this.orderTasks( this.tasksTemp, this.order.option_value );
      });

    });

  }

  selectTask ( code:number ) {
	this.code = code;
  }

  getPriority( task:Task ) : number {
    return parseInt(task.urgent) + parseInt(task.important);
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
