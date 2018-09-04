import { Component, OnInit } from "@angular/core";
import { Patient } from "../../../shared/data.model";
import { PatientsService } from "../../../shared/service.component";

@Component({
  selector: "app-tasks-header",
  templateUrl: "./tasks-header.component.html",
  styleUrls: ["./tasks-header.component.css"]
})
export class TasksHeaderComponent implements OnInit {
  goalTypeShow = false;
  statusShow = false;
  patients: Patient[];
  goal = "";

  constructor(private _patientsService: PatientsService) {}

  ngOnInit() {}

  gtDropDownMenu() {
    this.goalTypeShow = !this.goalTypeShow;
  }

  sDropDownMenu() {
    this.statusShow = !this.statusShow;
  }

  choose(event) {
    this.goal = event.target.innerHTML;

    this._patientsService.choices(this.goal);
  }
}
