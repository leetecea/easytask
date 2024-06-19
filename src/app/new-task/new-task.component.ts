import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INewTask } from '../model/task';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<INewTask>();

  newTask = {
    enteredTitle:'',
    enteredSummary: '',
    enteredDate:''
  }

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.add.emit({
      title: this.newTask.enteredTitle,
      summary: this.newTask.enteredSummary,
      dueDate: this.newTask.enteredDate
    })
  }
}
