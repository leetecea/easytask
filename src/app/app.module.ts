import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
  ], // é para declarar componentes não-standalone

  imports: [ // é para importar componentes autônomos (standalone) e também módulos
    BrowserModule,
    SharedModule,
    TasksModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
