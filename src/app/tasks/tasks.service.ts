import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../db/dummy-tasks';
import { INewTask, ITask } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: ITask[] = DUMMY_TASKS;


  constructor() { }


  getUserTasks(userId: string){
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(task: INewTask, userId: string){
     this.tasks.unshift({ // unshift adiciona a task no começo do array
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,

    })
    // this.tasks = [...this.tasks, task]
  }

  removeTask(taskId: string){
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
