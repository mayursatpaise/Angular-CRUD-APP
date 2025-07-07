
import { Component, EventEmitter, Input, Output } from '@angular/core';
import DUMMYUSER from '../../DummyData/dummyData.json';
import {type  User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  @Input() user: User[] = DUMMYUSER;
  @Output() select = new EventEmitter<string>();
  @Input() selected!: boolean; 

  onSelectUser(id: string) {
    this.select.emit(id);
  }
}
