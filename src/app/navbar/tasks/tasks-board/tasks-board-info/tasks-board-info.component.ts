import { Component, OnInit } from "@angular/core";

import { Patient } from "../../../tasks/data.model";

@Component({
  selector: "app-tasks-board-info",
  templateUrl: "./tasks-board-info.component.html",
  styleUrls: ["./tasks-board-info.component.css"]
})
export class TasksBoardInfoComponent implements OnInit {
  patients: Patient[] = [];

  constructor() {}

  ngOnInit() {}
}
