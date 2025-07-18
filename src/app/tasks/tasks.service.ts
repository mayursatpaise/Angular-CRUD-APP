
import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.module";

@Injectable({ providedIn: 'root' })
export class TaskService {
    private tasks: Array<{
        id: string;
        userid: string;
        title: string;
        summary: string;
        duedate: string;
    }> = [];


    constructor() { 
        const tasks = localStorage.getItem('tasks');
        if(tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userid === userId);
    this.saveTasks();
    }

    addTasks(tasksData: NewTaskData, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userid: userId,
            title: tasksData.title,
            summary: tasksData.summary,
            duedate: tasksData.date
        });
          this.saveTasks();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks(); 
    }

    private saveTasks() {
        localStorage.setItem('tasks',JSON.stringify(this.tasks));
    }
}