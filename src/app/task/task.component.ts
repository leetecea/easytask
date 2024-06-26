import { Component, Input, inject } from '@angular/core';
import { ITask } from '../model/task';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { TasksService } from '../tasks/tasks.service';
registerLocaleData(localePT);

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
})
export class TaskComponent {

  @Input({required: true }) task!: ITask;

  private tasksService = inject(TasksService);

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id)
  }

}
