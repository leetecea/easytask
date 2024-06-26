import { Component } from '@angular/core';
import { DUMMY_USERS } from './db/dummy-users';
import { IUser } from './model/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
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
