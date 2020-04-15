import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewExperiencePage } from './add-new-experience.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewExperiencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewExperiencePageRoutingModule {}
