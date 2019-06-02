import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { ErrorService } from './error.service';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  env = environment;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http:HttpClient,
               private error:ErrorService  ) { }

  public newTask( task:Task ) : Observable<Task> {
    return this.http.post( `${this.env.api_url}/task/create`, task, this.httpOptions ).pipe(
      tap((task: Task) => console.log("added task")),
      catchError(this.error.handleError<Task>('newTask'))
    );
  }

  public getPendingTasks() : Observable<Task[]> {
    return this.http.get<Task[]>( `${this.env.api_url}/task/read-state/0` );
  }

  public getInProgressTasks() : Observable<Task[]> {
    return this.http.get<Task[]>( `${this.env.api_url}/task/read-state/1` );
  }

  public getDoneTasks() : Observable<Task[]> {
    return this.http.get<Task[]>( `${this.env.api_url}/task/read-state/2` );
  }

  public getArchivedTasks() : Observable<Task[]> {
    return this.http.get<Task[]>( `${this.env.api_url}/task/read-state/3` );
  }

  public getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>( `${this.env.api_url}/task/read-all` );
  }

}
