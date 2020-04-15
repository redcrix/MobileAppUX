import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobPreference2Page } from './job-preference2.page';

const routes: Routes = [
  {
    path: '',
    component: JobPreference2Page
  },
  {
    path: 'select-time',
    loadChildren: () => import('./select-time/select-time.module').then( m => m.SelectTimePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobPreference2PageRoutingModule {}
