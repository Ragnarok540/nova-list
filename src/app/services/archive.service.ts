import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  archiveURL:string = 'http://localhost:8000/api/archive/';

  constructor( private http:HttpClient ) { }

  public getArchivedTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.archiveURL);
  }

  public deleteTask( code:number ) : Observable<Task[]> {
    return this.http.delete<Task[]>(this.archiveURL + code);
  }

}
