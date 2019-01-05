import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  taskURL:string = "http://localhost:8000/api/board";

  private pendingTasks:Task[] = [
      {
		code: 1,
		name: "Levantarse",
		desc: "Levantarse de la cama.",
		deadlineDate: "2019-01-05",
		deadlineTime: "06:00",
		urgent: "1",
		important: "2",
		state: 0
	  },

	  {
		code: 2,
		name: "Hacer Café",
		desc: "Hacer el café con leche.",
		deadlineDate: "2019-01-05",
		deadlineTime: "07:00",
		urgent: "1",
		important: "2",
		state: 0
	  }
  ];

  constructor( private http:HttpClient ) { 
    console.log("Servicio Board listo para usarse.");
  }

  public getPendingTasks():Task[]{
    return this.pendingTasks;
  }

  public getTask( code:number ):Task {
    return this.pendingTasks.filter( function(task){return (task.code == code );}  )[0];
  }


}