import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, Observable, of } from 'rxjs';
import { SubmissionModel } from './models/submission-model';
import { SubmissionsService } from './services/submissions.service';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {

  filterForm = new FormGroup({
    text: new FormControl(''),
    form: new FormControl(''),
    status: new FormControl(''),
    dueDate: new FormControl('')
  });

  // google map config
  mapOptions : google.maps.MapOptions = {
    mapTypeId: 'terrain',
    mapTypeControl: true
  }

  submissions$ : Observable<Array<SubmissionModel>> = of([]);

  constructor(
    private submissionsSrv: SubmissionsService
  ) { }

  ngOnInit(): void {
    this.submissions$ = this.submissionsSrv.getBy(null);

    // on change filter form
    this.filterForm.valueChanges.pipe(
      debounceTime(200),
    ).subscribe( (e:any) => {
      this.submissions$ = this.submissionsSrv.getBy(e as SubmissionModel);
    });
  }

}
