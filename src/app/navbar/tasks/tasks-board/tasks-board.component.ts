import { Component, OnInit } from "@angular/core";
import { Patient } from "../../../shared/data.model";
import { PatientsService } from "../../../shared/service.component";

@Component({
  selector: "app-tasks-board",
  templateUrl: "./tasks-board.component.html",
  styleUrls: ["./tasks-board.component.css"]
})
export class TasksBoardComponent implements OnInit {
  sorterImgPath: string;
  patients: Patient[];

  constructor(private _patientsService: PatientsService) {
    this.sorterImgPath = "../../../../assets/images/sorter.png";
  }

  ngOnInit() {
    this.patients = this._patientsService.getAllPatients();

    this._patientsService.filteredPatients.subscribe(patients => {
      this.patients = patients;
    });
  }
}
