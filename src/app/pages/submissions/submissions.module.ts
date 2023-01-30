import { NgModule } from '@angular/core';
import { SubmissionsComponent } from './submissions.component';
import { WorkflowItemComponent } from './components/workflow-item/workflow-item.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { SubmissionsService } from './services/submissions.service';

const routes: Routes = [
  {
    path: "",
    component: SubmissionsComponent
  }
]

@NgModule({
  declarations: [
    SubmissionsComponent,
    WorkflowItemComponent
  ],
  imports: [
    SharedModule,
    GoogleMapsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SubmissionsService
  ]
})
export class SubmissionsModule { }
