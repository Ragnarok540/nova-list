import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchURL:string = 'http://localhost:8000/api/search/';

  constructor( private http:HttpClient ) { }

  public getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.searchURL);
  }

}
