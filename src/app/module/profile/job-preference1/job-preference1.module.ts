import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobPreference1PageRoutingModule } from './job-preference1-routing.module';

import { JobPreference1Page } from './job-preference1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobPreference1PageRoutingModule
  ],
  declarations: [JobPreference1Page]
})
export class JobPreference1PageModule {}
