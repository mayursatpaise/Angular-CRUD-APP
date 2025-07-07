import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.module';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name!: string | undefined;
  @Input({ required: true }) userId!: string;
  isAddingTask: boolean = false;
  private taskService = inject(TaskService);

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancleTask() {
    this.isAddingTask = false;
  }

  onAddTask(tasksData: NewTaskData) {
    this.taskService.addTasks(tasksData, this.userId);
    this.isAddingTask = false;
  }
}
