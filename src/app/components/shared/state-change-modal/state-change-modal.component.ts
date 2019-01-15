import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskDetailService } from '../../../services/task-detail.service';

@Component({
  selector: 'app-state-change-modal',
  templateUrl: './state-change-modal.component.html',
  styleUrls: ['./state-change-modal.component.css']
})
export class StateChangeModalComponent implements OnInit {

  @Input() code : number;
  @Input() state : number;

  constructor( private router:Router,
               private taskDetailService:TaskDetailService ) { }

  ngOnInit() {
  }

  changeState( code:number , task_state:number ) {

    this.taskDetailService.changeState( code, task_state ).subscribe( task => {
      this.router.navigate(['/board']);
    });

  }

}
