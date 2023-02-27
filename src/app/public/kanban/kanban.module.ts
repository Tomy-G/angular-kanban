import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';
import { ColumnComponent } from './components/column/column.component';
import { TaskComponent } from './components/task/task.component';
import {CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    KanbanPageComponent,
    ColumnComponent,
    TaskComponent,
  ],
  imports: [
    CommonModule, RouterModule, FormsModule, DragDropModule
  ],
  exports: [
    KanbanPageComponent
  ]
})
export class KanbanModule { }
