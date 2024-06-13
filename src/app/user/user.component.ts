import { Component, EventEmitter, Input, Output, computed, output } from '@angular/core';
import { IUser } from '../model/user';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: IUser;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return `users/${this.user.avatar}`
  }

  onSelectUser(){
    this.select.emit(this.user.id);

  }

}
