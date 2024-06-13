import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../model/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true }) task!: ITask;
  @Output() taskComplete = new EventEmitter<string>();

  onCompleteTask(){
    this.taskComplete.emit(this.task.id);
  }

}
