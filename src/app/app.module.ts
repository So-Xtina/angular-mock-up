import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { IntakeComponent } from "./navbar/intake/intake.component";
import { TasksComponent } from "./navbar/tasks/tasks.component";
import { TasksHeaderComponent } from "./navbar/tasks/tasks-header/tasks-header.component";
import { TasksSearchComponent } from "./navbar/tasks/tasks-search/tasks-search.component";
import { TasksBoardComponent } from "./navbar/tasks/tasks-board/tasks-board.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntakeComponent,
    TasksComponent,
    TasksHeaderComponent,
    TasksSearchComponent,
    TasksBoardComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
