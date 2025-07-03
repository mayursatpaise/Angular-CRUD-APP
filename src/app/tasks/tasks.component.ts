import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {type NewTaskData } from './task/task.module';
import { TaskService } from './task/tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name!: string | undefined;
  @Input({required:true}) userId!: string;
  isAddingTask: boolean = false;
  private taskService =inject(TaskService)
  

  // constructor(private tasksService: TaskService) {}


  
get selectedUserTasks() {
  return this.tasks.filter(task => task.userid === this.userId);
}
  
  tasks: {
    id: string;
    userid: string;
    title: string;
    summary: string;
    duedate: string;
  }[] = [{
    id: '1',
    userid: 'u1',
    title: 'Task 1',
    summary: 'This is the first task',
    duedate: '2023-10-01'
  }, {
    id: '2',
    userid: 'u2',
    title: 'Task 2',
    summary: 'This is the second task',
    duedate: '2023-10-02'
  }];
  onCompleteTask(id: string) { 
    this.tasks = this.tasks.filter((task)=>task.id!==id)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancleTask() {
    this.isAddingTask = false;
  }
  onAddTask(tasksData:NewTaskData) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userid: this.userId,
      title: tasksData.title,
      summary: tasksData.summary,
      duedate: tasksData.date
    });
    this.isAddingTask = false;
  }
}