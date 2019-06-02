import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ErrorService } from './error.service';
import { Options } from '../interfaces/options';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  env = environment;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http:HttpClient,
               private error:ErrorService ) { }

  public getOption( option_name:string ): Observable<Options> {
    return this.http.get<Options>( `${this.env.api_url}/option/read/${option_name}` );
  }

  public updateOption( option:Options ) : Observable<Options> {

    return this.http.patch( `${this.env.api_url}/option/update-value`, option, this.httpOptions ).pipe(
      tap(( option:Options ) => console.log("option updated")),
      catchError(this.error.handleError<Options>('updateOption'))
    );

  }

}
