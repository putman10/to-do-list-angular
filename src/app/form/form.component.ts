import { Component, OnInit } from '@angular/core';
import { Task } from '.././models/task.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userName: string = "Reese"
  tasks: Task[] = [
    new Task ('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 1)
  ];

  constructor() { }

  selectedTask = null;

  ngOnInit() {
  }

  finishedEditing() {
  this.selectedTask = null;
}

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
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
