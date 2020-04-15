import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-experience',
  templateUrl: './add-new-experience.page.html',
  styleUrls: ['./add-new-experience.page.scss'],
})
export class AddNewExperiencePage implements OnInit {

  new_work_exp = false;
  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  add_Work_Exp(){
this.new_work_exp = true;
  }

  SaveAndContinue(){
    this.navCtrl.navigateForward('job-preference1');
  }

}
