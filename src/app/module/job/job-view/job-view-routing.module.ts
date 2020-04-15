import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobViewPage } from './job-view.page';

const routes: Routes = [
  {
    path: '',
    component: JobViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobViewPageRoutingModule {}
