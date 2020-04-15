import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SetHourlyRatesPage } from '../../../core/components/set-hourly-rates/set-hourly-rates.page';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.page.html',
  styleUrls: ['./job-view.page.scss'],
})
export class JobViewPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async setHourly(){
    const modal = await this.modalController.create({
      component: SetHourlyRatesPage,
      componentProps: {  }
    });
    return await modal.present();
  }

  myJobs(){
    this.navCtrl.navigateForward('/tabs/my-jobs');
    
  }

}
