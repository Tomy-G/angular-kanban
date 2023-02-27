import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanModule } from './public/kanban/kanban.module';
import { KanbanPageComponent } from './public/kanban/pages/kanban-page/kanban-page.component';
import { AddTaskPageComponent } from './public/add-task/pages/add-task-page/add-task-page.component';
import { ColumnComponent } from './public/kanban/components/column/column.component';

const routes: Routes = [
  { path: '', redirectTo: '/kanban', pathMatch: 'full' },
  { path: 'kanban', component: KanbanPageComponent },
  // { path: 'addtask/:id', component: AddTaskPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule] ,
})
export class AppRoutingModule {}
