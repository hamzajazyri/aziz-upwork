import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "submissions",
    loadChildren: () => import('./pages/submissions/submissions.module').then( m => m.SubmissionsModule )
  },
  {
    path: '',
    redirectTo: "submissions",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
