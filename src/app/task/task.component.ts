import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../model/task';
import { CardComponent } from "../shared/card/card.component";
import { DatePipe, registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent, DatePipe ]
})
export class TaskComponent {

  @Input({required: true }) task!: ITask;
  @Output() taskComplete = new EventEmitter<string>();

  onCompleteTask(){
    this.taskComplete.emit(this.task.id);
  }

}
