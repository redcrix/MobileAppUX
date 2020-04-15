import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-job-preference1',
  templateUrl: './job-preference1.page.html',
  styleUrls: ['./job-preference1.page.scss'],
})
export class JobPreference1Page implements OnInit {

  CategoryExpand: boolean = false;

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  categoryExpand(){
    this.CategoryExpand = !this.CategoryExpand
  }

  SaveAndContinue(){
    this.navCtrl.navigateForward('job-preference2');
  }

}
