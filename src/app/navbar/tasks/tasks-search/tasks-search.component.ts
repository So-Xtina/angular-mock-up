import { Component, OnInit } from "@angular/core";
import { Patient } from "../../../shared/data.model";
import { PatientsService } from "../../../shared/service.component";

@Component({
  selector: "app-tasks-search",
  templateUrl: "./tasks-search.component.html",
  styleUrls: ["./tasks-search.component.css"]
})
export class TasksSearchComponent implements OnInit {
  patients: Patient[];
  term = "";

  constructor(private _patientsService: PatientsService) {}

  onUpdate(event: Event) {
    this.term = (<HTMLInputElement>event.target).value;
  }

  filterPatients(term: string) {
    this.patients = this._patientsService.filterPatients(this.term);
  }

  clearInput() {
    this.term = "";
  }

  ngOnInit() {
    this.patients = this._patientsService.getAllPatients();
  }
}
