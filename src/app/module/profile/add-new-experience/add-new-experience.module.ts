import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewExperiencePageRoutingModule } from './add-new-experience-routing.module';

import { AddNewExperiencePage } from './add-new-experience.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewExperiencePageRoutingModule
  ],
  declarations: [AddNewExperiencePage]
})
export class AddNewExperiencePageModule {}
