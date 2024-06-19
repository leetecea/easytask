import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { INewTask, ITask } from '../model/task';
import { DUMMY_TASKS } from '../db/dummy-tasks'
import { NewTaskComponent } from "../new-task/new-task.component";

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
  tasks: ITask[] = DUMMY_TASKS;
  isAddTaskModalVisible = false;

  get selectedUserTasks(){
    return this.tasks.filter(task => task.userId === this.userId)
  }

  onCompleteTask(taskId: string){
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  handleModalAddTask(){
    this.isAddTaskModalVisible = !this.isAddTaskModalVisible;
  }

  onAddTask(task: INewTask){
    this.tasks.unshift({ // unshift adiciona a task no começo do array
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,

    })
    this.isAddTaskModalVisible = false;
    // this.tasks = [...this.tasks, task]

  }
}
