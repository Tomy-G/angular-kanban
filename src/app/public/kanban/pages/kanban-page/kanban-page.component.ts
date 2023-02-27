import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-page',
  templateUrl: './kanban-page.component.html',
  styleUrls: ['./kanban-page.component.scss']
})
export class KanbanPageComponent implements OnInit {
  todo: string = "TO DO";
  inProg: string = "IN PROG";
  toBe: string = "TO BE TESTED";
  done: string = "DONE";
  estimation: string = "";
  name: string = "";
  tipo!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
