import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskPageComponent } from './pages/add-task-page/add-task-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddTaskPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],exports : [
    AddTaskPageComponent
  ]
})
export class AddTaskModule { }
