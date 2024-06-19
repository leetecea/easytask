import { Component, EventEmitter, Input, Output, computed, output } from '@angular/core';
import { IUser } from '../model/user';
import { CardComponent } from "../shared/card/card.component";


@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
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
