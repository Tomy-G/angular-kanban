import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() name!: string;
  @Input() estimation!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
