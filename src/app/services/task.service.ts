import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskURL:string = "http://localhost:8000/api/task";

  constructor( private http:HttpClient ) { }

  newTask( task:Task ) : Observable<Task> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    let arr:string[] = [];

    arr.push(task.name);
    arr.push(task.desc);
    arr.push(task.deadlineDate);
    arr.push(task.deadlineTime);
    arr.push(task.urgent);
    arr.push(task.important);
    arr.push("0");

    return this.http.post( this.taskURL, arr, httpOptions ).pipe(
      tap((task: Task) => console.log("added task")),
      catchError(this.handleError<Task>('newTask'))
    );

  }

	/**
     * 
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {
	 
		// TODO: send the error to remote logging infrastructure
		console.error(error); // log to console instead
	 
		// TODO: better job of transforming error for user consumption
		//this.log(`${operation} failed: ${error.message}`);
	 
		// Let the app keep running by returning an empty result.
		return of(result as T);
	  };
	}

}
