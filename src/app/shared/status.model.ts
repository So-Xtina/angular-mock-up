export class Status {
  public type: string;
  public progress: string;

  constructor(type: string, progress: string) {
    this.type = type;
    this.progress = progress;
  }
}
