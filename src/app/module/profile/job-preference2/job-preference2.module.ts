import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobPreference2PageRoutingModule } from './job-preference2-routing.module';

import { JobPreference2Page } from './job-preference2.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobPreference2PageRoutingModule,
    // selectTimePreferenceModule
  ],
  declarations: [JobPreference2Page]
})
export class JobPreference2PageModule {}
