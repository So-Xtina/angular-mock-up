import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tasks-board",
  templateUrl: "./tasks-board.component.html",
  styleUrls: ["./tasks-board.component.css"]
})
export class TasksBoardComponent implements OnInit {
  sorterImgPath: string;

  constructor() {
    this.sorterImgPath = "../../../../assets/images/sorter.png";
  }

  ngOnInit() {}
}
