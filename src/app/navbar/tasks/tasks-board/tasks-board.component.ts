import { Component, OnInit } from "@angular/core";

import { Patient } from "../../../shared/data.model";

@Component({
  selector: "app-tasks-board",
  templateUrl: "./tasks-board.component.html",
  styleUrls: ["./tasks-board.component.css"]
})
export class TasksBoardComponent implements OnInit {
  sorterImgPath: string;
  patients: Patient[] = [
    new Patient(
      1,
      { type: "Accepted", progress: "0%" },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "06/22/2018", value: 66 },
      { date: "06/22/2018", value: 66 }
    ),
    new Patient(
      2,
      { type: "Pending", progress: null },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "06/22/2018", value: 66 },
      { date: null, value: null }
    ),
    new Patient(
      3,
      { type: "Accepted", progress: "50%" },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/15/2018", value: 12 },
      { date: "08/15/2018", value: 12 }
    ),
    new Patient(
      4,
      { type: "Pending", progress: null },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/20/2018", value: 8 },
      { date: null, value: null }
    ),
    new Patient(
      5,
      { type: "Accepted", progress: "50%" },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/20/2018", value: 8 },
      { date: "08/20/2018", value: 8 }
    ),
    new Patient(
      6,
      { type: "Accepted", progress: "0%" },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/05/2018", value: 22 },
      { date: "08/05/2018", value: 22 }
    ),
    new Patient(
      7,
      { type: "Pending", progress: null },
      "Authorize",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/21/2018", value: 7 },
      { date: null, value: null }
    ),
    new Patient(
      8,
      { type: "Pending", progress: null },
      "Authorize",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/22/2018", value: 6 },
      { date: null, value: null }
    ),
    new Patient(
      9,
      { type: "Accepted", progress: "0%" },
      "Benefits",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/21/2018", value: 7 },
      { date: "08/21/2018", value: 7 }
    ),
    new Patient(
      10,
      { type: "Accepted", progress: "50%" },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/05/2018", value: 22 },
      { date: "08/05/2018", value: 22 }
    )
  ];

  constructor() {
    this.sorterImgPath = "../../../../assets/images/sorter.png";
  }

  ngOnInit() {}
}
