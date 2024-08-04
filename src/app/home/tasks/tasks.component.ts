import { Component, inject, OnInit, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from '../../shared/services/task-service.service';
import { IStatus, ITask } from '../../shared/models/ITask';
import { SearchPipe } from "../../shared/pipes/search.pipe";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule, SearchPipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  searchText: string = '';
  tasks = signal<Array<ITask>>([]);
  status = signal<IStatus[]>([])
  task_service = inject(TaskServiceService);
  ngOnInit(): void {
    this.task_service.getTask().subscribe(tasks => this.tasks.set(tasks))
    this.task_service.getStatus().subscribe(status => this.status.set(status))
  }
  onStatuschange = (state: any) => {
    let statusName = String(state.target.value).toLowerCase();
    if (statusName === 'all') {
      this.task_service.getTask().subscribe(tasks => this.tasks.set(tasks))
    }
    else {
      this.task_service.getTasksByStatusName(statusName).subscribe(tasks => this.tasks.set(tasks))
    }
  }
}
