import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanModule } from './public/kanban/kanban.module';
import { PublicModule } from './public/public.module';
import { FormsModule } from '@angular/forms';
import { AddTaskModule } from './public/add-task/add-task.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    KanbanModule,
  FormsModule,
  AddTaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
