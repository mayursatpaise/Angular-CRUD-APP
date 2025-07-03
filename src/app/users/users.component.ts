
import { Component, EventEmitter, Input, Output } from '@angular/core';
import DUMMYUSER from '../../DummyData/dummyData.json';
import {type  User } from './user.model';
import { CardComponent } from "../shared/card/card.component"; 

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [CardComponent], 
})
export class UsersComponent {
  @Input() user: User[] = DUMMYUSER;
  @Output() select = new EventEmitter<string>();
  @Input() selected!: boolean; 

  onSelectUser(id: string) {
    this.select.emit(id);
  }
}
