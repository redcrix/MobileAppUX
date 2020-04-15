import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SelectTimePage } from './select-time/select-time.page';

@Component({
  selector: 'app-job-preference2',
  templateUrl: './job-preference2.page.html',
  styleUrls: ['./job-preference2.page.scss'],
})
export class JobPreference2Page implements OnInit {

  constructor(
    private navCtrl: NavController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  SaveAndContinue(){
    this.navCtrl.navigateForward('tabs/profile');
  }

  async selectTime() {
    const modal = await this.modalController.create({
      component: SelectTimePage,
      componentProps: {  }
    });
    return await modal.present();
  }


}
