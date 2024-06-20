import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { INewTask, ITask } from '../model/task';
import { DUMMY_TASKS } from '../db/dummy-tasks'
import { NewTaskComponent } from "../new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string; // pode tipar também como string | undefined e tirar o ? do name

  isAddTaskModalVisible = false;

  constructor(private tasksService: TasksService){}

  get selectedUserTasks(){
   return this.tasksService.getUserTasks(this.userId)
  }

  onStartAddTask(){
    this.isAddTaskModalVisible = true;
  }


  onCloseAddTask(){
    this.isAddTaskModalVisible = false;
  }

}
