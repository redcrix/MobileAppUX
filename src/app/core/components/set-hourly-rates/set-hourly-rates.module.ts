import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetHourlyRatesPageRoutingModule } from './set-hourly-rates-routing.module';

import { SetHourlyRatesPage } from './set-hourly-rates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetHourlyRatesPageRoutingModule
  ],
  declarations: [SetHourlyRatesPage]
})
export class SetHourlyRatesPageModule {}
