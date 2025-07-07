import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.module';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  enterTitle = '';
  enterSummary = '';
  enterDate = '';

  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    this.add.emit({
      title: this.enterTitle,
      summary: this.enterSummary,
      date: this.enterDate
    })
  }
}
