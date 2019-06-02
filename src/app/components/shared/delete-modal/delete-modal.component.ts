import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Input() code : number;

  constructor( private router:Router,
               private taskService:TaskService ) { }

  ngOnInit() {
  }

  deleteTask( code:number ) {

    this.taskService.deleteTask( code ).subscribe( task => {
      this.router.navigate(['/board']);
    });

  }

}
