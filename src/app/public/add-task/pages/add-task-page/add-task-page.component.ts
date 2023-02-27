import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/public/kanban/components/task/task';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-task-page',
  templateUrl: './add-task-page.component.html',
  styleUrls: ['./add-task-page.component.scss']
})
export class AddTaskPageComponent implements OnInit {

  task : Task = {
    name : "",
    estimation : ""
  }
  
  name!: string;
  estimation: string = "";

  constructor(private route: ActivatedRoute, private location: Location) {
    
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  }


}
