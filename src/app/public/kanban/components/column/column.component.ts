import { Target } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task/task';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  tasks: Task[] = [{ name: 'ADS', estimation: 'sasadd' }];
  @Input() namee!: string;
  param!: string;
  estimation!: string;
  name!: string;
  constructor() {}

  addTask() {
    if (this.name && this.estimation) {
      let newTask: Task = { name: this.name, estimation: this.estimation };
      this.tasks.push(newTask);
    }
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(':(');
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      console.log('ojala');
    }
  }

  ngOnInit(): void {}
}
