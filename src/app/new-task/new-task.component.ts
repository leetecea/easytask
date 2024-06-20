import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INewTask } from '../model/task';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  newTask = {
    enteredTitle:'',
    enteredSummary: '',
    enteredDate:''
  }

  private tasksService = inject(TasksService);

  onCloseModal(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.newTask.enteredTitle,
      summary: this.newTask.enteredSummary,
      dueDate: this.newTask.enteredDate
      }, this.userId
    )
    this.close.emit();
  }
}
