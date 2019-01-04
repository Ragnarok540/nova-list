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

  constructor( private boardService:BoardService,
               private router:Router ) { }

  ngOnInit() {
    this.pendingTasks = this.boardService.getPendingTasks();
  }

  seeTask( code:number ) {
    this.router.navigate( ['/task', code] );
  }

}
