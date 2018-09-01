export class Patient {
  public status: object;
  public goal: string;
  public assigned_to: string;
  public patient: object;
  public date_assigned: object;
  public date_accepted: object;

  constructor(
    status: object,
    goal: string,
    assigned_to: string,
    patient: object,
    date_assigned: object,
    date_accepted: object
  ) {
    this.status = status;
    this.goal = goal;
    this.assigned_to = assigned_to;
    this.patient = patient;
    this.date_assigned = date_assigned;
    this.date_accepted = date_accepted;
  }
}
