import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService, Task } from '../../services/board.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task:Task = {};

  constructor( private activatedRoute:ActivatedRoute,
               private boardService:BoardService ) {
    this.activatedRoute.params.subscribe( params => {
      console.log( params['code'] );
      this.task = this.boardService.getTask( params['code'] );
      console.log(this.task);
    })

  }

  ngOnInit() {
  }

}
