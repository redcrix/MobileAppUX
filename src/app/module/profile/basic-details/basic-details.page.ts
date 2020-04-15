import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { JobSeeker } from 'src/app/core/modal/job-seeker.modal';
import { NotificationService } from 'src/app/core/services/notification.service'
import { JobSeekerService } from 'src/app/core/services/job-seeker.service';


@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.page.html',
  styleUrls: ['./basic-details.page.scss'],
})
export class BasicDetailsPage implements OnInit {

  data: JobSeeker = new JobSeeker();
  constructor(
    private navCtrl: NavController,
    private location: Location,
    
    private notify: NotificationService,
    private service: JobSeekerService
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

  onSave(form){
    this.navCtrl.navigateForward('select-location');
    if(form.invalid){
      this.notify.showMessage("Invalid Form!", 1000);
      return;
    }
    //send request to server with all the valid data
    this.service.create(this.data).subscribe(data => {
      this.notify.showMessage("Success", 1000);
      this.navCtrl.navigateForward('select-location');
    })


    
  }




}
