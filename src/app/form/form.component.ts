import { Component, OnInit } from '@angular/core';
import { Task } from '.././models/task.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userName: string = "Reese"


  constructor() { }


  ngOnInit() {
  }


  priorityColor(currentTask) {
    if (currentTask.priority === 3) {
      return 'bg-danger';
    } else if (currentTask.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

}
