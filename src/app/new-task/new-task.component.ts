import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INewTask } from '../model/task';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<INewTask>();

  constructor(
    private tasksService: TasksService
  ){}
// ou pode usar: private tasksService = inject(TasksService)
  newTask = {
    enteredTitle:'',
    enteredSummary: '',
    enteredDate:''
  }

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.newTask.enteredTitle,
      summary: this.newTask.enteredSummary,
      dueDate: this.newTask.enteredDate
    }, this.userId)
  }
}
