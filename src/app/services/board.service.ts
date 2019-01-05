import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  boardURL:string = 'http://localhost:8000/api/board';

  constructor( private http:HttpClient ) { }

  public getPendingTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.boardURL + '/0');
  }

  public getInProgressTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.boardURL + '/1');
  }

  public getDoneTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.boardURL + '/2');
  }

}