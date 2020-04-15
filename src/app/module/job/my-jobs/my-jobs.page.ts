import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.page.html',
  styleUrls: ['./my-jobs.page.scss'],
})
export class MyJobsPage implements OnInit {

  constructor(    private navCtrl: NavController,) { }

  ngOnInit() {
  }

  notifications(){
    this.navCtrl.navigateForward('notifications');
  }

}
