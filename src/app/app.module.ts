import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser'
import { HeaderComponent } from './header/header.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from "./tasks/task/task.component";


@NgModule({
    declarations: [AppComponent, UsersComponent, TasksComponent, HeaderComponent, NewTaskComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, TaskComponent]
})

export class AppModule { }