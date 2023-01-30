import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';
import { SubmissionModel } from '../models/submission-model';

@Injectable({
  providedIn: 'any',
})
export class SubmissionsService {
  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
    ) {}

  getBy(object: SubmissionModel|null) {
    return this.http
      .get<Array<SubmissionModel>>('fake-data/submissions.json').pipe(
        map( (subs) => {
          if(object === null) return subs;
          return subs.filter( item => this.isMatch(item, object));
        })
      );
  }


  private isMatch(obj: SubmissionModel, otherObj: SubmissionModel): boolean {
      if(otherObj.dueDate)
        otherObj.dueDate =  this.datePipe.transform(otherObj.dueDate, "MM/dd/YYYY")!;
      for (const key of Object.keys(obj)) {
        if(!otherObj[key as keyof SubmissionModel]) continue;
        if (
          obj[key as keyof SubmissionModel].toString().toLocaleLowerCase()
          .indexOf(otherObj[key as keyof SubmissionModel].toString().toLocaleLowerCase()) === -1
        ) return false;
      }
    return true;
  }
}
