export enum SubmissionStatus {
  uncomplete,
  lowRisk,
  needsReview
}

export interface SubmissionModel {
  text: string;
  form: string;
  dueDate: Date | string;
  status: SubmissionStatus;
  from: string;
  to: string;
  latitude: number;
  longitude: number;
}
