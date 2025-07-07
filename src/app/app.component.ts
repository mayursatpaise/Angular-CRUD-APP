import { Component } from '@angular/core';
import DUMMYUSER from '../DummyData/dummyData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],// Corrected property name
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
