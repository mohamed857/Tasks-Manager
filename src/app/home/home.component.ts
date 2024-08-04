import { Component } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from "./tasks/tasks.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewTaskComponent, TasksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
