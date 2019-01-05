import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskDetailService {

  taskDetailURL:string = "http://localhost:8000/api/task-detail";

  constructor( private http:HttpClient ) { }

  public getTask( code:number ): Observable<Task> {
    return this.http.get<Task>(this.taskDetailURL + '/' + code);
  }


}
