import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { DUMMY_USERS } from './db/dummy-users';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserComponent, HeaderComponent]
})
export class AppComponent {
  title = 'easytask';
  users = DUMMY_USERS;

}
