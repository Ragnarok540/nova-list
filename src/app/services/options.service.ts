import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Options } from '../interfaces/options';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  optionsURL:string = "http://localhost:8000/api/options/";

  constructor( private http:HttpClient ) { }

  public getOption( option_name:string ): Observable<Options> {
    return this.http.get<Options>(this.optionsURL + option_name);
  }

  public updateOption( option:Options ) : Observable<Options> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    let arr:string[] = [];

    arr.push(option.option_value);
    arr.push(option.option_name);

    return this.http.patch( this.optionsURL, arr, httpOptions ).pipe(
      tap(( option:Options ) => console.log("option updated")),
      catchError(this.handleError<Options>('updateOption'))
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
