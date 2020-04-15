import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobPreference1Page } from './job-preference1.page';

const routes: Routes = [
  {
    path: '',
    component: JobPreference1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobPreference1PageRoutingModule {}
