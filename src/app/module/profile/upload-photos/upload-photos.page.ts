import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.page.html',
  styleUrls: ['./upload-photos.page.scss'],
})
export class UploadPhotosPage implements OnInit {

  constructor(
    private location: Location,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

  SaveAndContinue(){
    this.navCtrl.navigateForward('add-new-experience');
  }

  

}
