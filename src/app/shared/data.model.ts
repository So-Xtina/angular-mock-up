import { Status } from "./status.model";
import { Person } from "./person.model";
import { DateAssigned } from "./date_assigned.model";
import { DateAccepted } from "./date_accepted.model";

export class Patient {
  public id: number;
  public status: Status;
  public goal: string;
  public assigned_to: string;
  public patient: Person;
  public date_assigned: DateAssigned;
  public date_accepted: DateAccepted;

  constructor(
    id: number,
    status: Status,
    goal: string,
    assigned_to: string,
    patient: Person,
    date_assigned: DateAssigned,
    date_accepted: DateAccepted
  ) {
    this.id = id;
    this.status = status;
    this.goal = goal;
    this.assigned_to = assigned_to;
    this.patient = patient;
    this.date_assigned = date_assigned;
    this.date_accepted = date_accepted;
  }
}
