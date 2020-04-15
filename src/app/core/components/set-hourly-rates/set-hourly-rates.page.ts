import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-set-hourly-rates',
  templateUrl: './set-hourly-rates.page.html',
  styleUrls: ['./set-hourly-rates.page.scss'],
})
export class SetHourlyRatesPage implements OnInit {

  hourlyPrices = [
    {price : '$ 200' , time : '2 hr'},
    {price : '$ 300' , time : '4 hr'},
    {price : '$ 500' , time : '8 hr'},
    {price : '$ 700' , time : '12 hr'},
  ]
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  save(){

    this.modalController.dismiss({
      'dismissed': true
    });
  }


}
