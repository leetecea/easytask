import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { ITask } from '../model/task';
import { DUMMY_TASKS } from '../db/dummy-tasks'
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent]
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string; // pode tipar também como string | undefined e tirar o ? do name
  tasks: ITask[] = DUMMY_TASKS;

  @ViewChild(NewTaskComponent, { read: ElementRef })
  private modal?: ElementRef<HTMLDialogElement>

  private get modalElement() {
    return this.modal?.nativeElement as HTMLDialogElement;
  }

  showModal(){
    this.modalElement.showModal();
  }

  public closeModal(){
    this.modalElement.close();
  }


  get selectedUserTasks(){
    return this.tasks.filter(task => task.userId === this.userId)
  }

  onCompleteTask(taskId: string){
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
