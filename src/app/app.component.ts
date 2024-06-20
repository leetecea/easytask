import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { DUMMY_USERS } from './db/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { IUser } from './model/user';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserComponent, HeaderComponent, TasksComponent]
})
export class AppComponent {
  title = 'easytask';
  users: IUser[] = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return DUMMY_USERS.find(user => user.id === this.selectedUserId);
  }


  onSelectUser(id: string){
    this.selectedUserId = id;
  }

}
