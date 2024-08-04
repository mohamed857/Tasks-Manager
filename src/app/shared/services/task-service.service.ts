import { Injectable } from '@angular/core';
import { IStatus, ITask } from '../models/ITask';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }
  status:IStatus[]=[
    {statusId:1, statusName:'opened'},
    {statusId:2, statusName:'Completed'}
  ]
  tasks: ITask[] = [
    { id: '1', title: 'Task 1', description: 'Task 1 description', imgUrl: 'assets/task-management-logo.png' ,status:'Completed'},
    { id: '2', title: 'Task 2', description: 'Task 2 description', imgUrl: 'assets/task_completed.png',status:'opened' },
    { id: '3', title: 'Task 3', description: 'Task 3 description', imgUrl: 'https://via.placeholder.com/150',status:'Completed' },
  ]
  getTask = (): Observable<ITask[]> => {
    return of(this.tasks);
  }
  getStatus = (): Observable<IStatus[]> => {
    return of(this.status);
  }
  getTasksByStatusName = (name:String):Observable<ITask[]> => {
    return of(this.tasks.filter((task) => task.status.toLowerCase() === name));
  }

}
