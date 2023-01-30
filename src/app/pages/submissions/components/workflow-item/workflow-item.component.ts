import { Component, Input, OnInit } from '@angular/core';
import { SubmissionModel } from '../../models/submission-model';

@Component({
  selector: 'app-workflow-item',
  templateUrl: './workflow-item.component.html',
  styleUrls: ['./workflow-item.component.scss']
})
export class WorkflowItemComponent implements OnInit {

  @Input() val! : SubmissionModel;

  constructor() { }

  ngOnInit(): void {
  }

}
