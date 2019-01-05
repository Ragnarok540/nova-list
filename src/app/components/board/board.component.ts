import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  pendingTasks:Task[] = [];

  inProgressTasks:Task[] = [];

  doneTasks:Task[] = [];

  constructor( private boardService:BoardService,
               private router:Router ) { }

  ngOnInit() {

    this.boardService.getPendingTasks().subscribe( tasks => {
      this.pendingTasks = tasks;
    });

    this.boardService.getInProgressTasks().subscribe( tasks => {
      this.inProgressTasks = tasks;
    });

    this.boardService.getDoneTasks().subscribe( tasks => {
      this.doneTasks = tasks;
    });

  }

  seeTask( code:number ) {
    this.router.navigate( ['/task-detail', code] );
  }

}
