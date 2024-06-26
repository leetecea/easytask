import { Component, Input } from '@angular/core';
import { INewTask } from '../model/task';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string; // pode tipar também como string | undefined e tirar o ? do name
  isAddTaskModalVisible = false;

  constructor(
    private tasksService: TasksService
  ){}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }

  onCompleteTask(taskId: string){
  }

  handleModalAddTask(){
    this.isAddTaskModalVisible = !this.isAddTaskModalVisible;
  }

  onAddTask(task: INewTask){

    this.isAddTaskModalVisible = false;

  }
}
