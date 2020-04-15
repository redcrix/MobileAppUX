import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobViewPageRoutingModule } from './job-view-routing.module';

import { JobViewPage } from './job-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobViewPageRoutingModule
  ],
  declarations: [JobViewPage]
})
export class JobViewPageModule {}
