import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskDetailService {

  taskDetailURL:string = "http://localhost:8000/api/task-detail/";

  constructor( private http:HttpClient ) { }

  public getTask( code:number ): Observable<Task> {
    return this.http.get<Task>(this.taskDetailURL + code);
  }

  public changeState( code:number , task_state:number ) : Observable<Task> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    let arr:string[] = [];

    arr.push( "" + task_state );
    arr.push( "" + code );

    return this.http.patch( this.taskDetailURL, arr, httpOptions ).pipe(
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
