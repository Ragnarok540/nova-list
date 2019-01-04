import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
// import { BoardService } from '../../services/board.service';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task:Task = { 
	  code: null,
	  name: null,
	  desc: null,
	  deadlineDate: null,
	  deadlineTime: null,
	  urgent: null,
	  important: null,
	  state: null
  }

  constructor( private activatedRoute:ActivatedRoute,
               private router:Router,
             //private boardService:BoardService,
               private taskService:TaskService ) {
/*
    this.activatedRoute.params.subscribe( params => {
      console.log( params['code'] );
      this.task = this.boardService.getTask( params['code'] );
      console.log(this.task);
    })
*/
  }

  ngOnInit() { }

  save( forma:NgForm ) {
    console.log("Formulario posteado");
    console.log(forma.value);
    this.taskService.newTask( forma.value as Task ).subscribe( taskO => {
      console.log(taskO);
      this.router.navigate(['/board']);
    });
  }

}
