import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component';
import DUMMYUSER from '../DummyData/dummyData.json';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsersComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected property name
})
export class AppComponent {
  users = DUMMYUSER;

  seletedUserId: string = '';
  get selectedUser() { 
     return this.users.find((user) => user.id === this.seletedUserId);
  }
  
  onSelectUser(id:string) {
    this.seletedUserId = id;
  }
}
