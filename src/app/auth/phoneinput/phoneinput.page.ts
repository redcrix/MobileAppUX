import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import {Keyboard} from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-phoneinput',
  templateUrl: './phoneinput.page.html',
  styleUrls: ['./phoneinput.page.scss'],
})
export class PhoneinputPage implements OnInit {

  mobileNo = '9999888800';
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private router: Router,
    private keyboard: Keyboard
    ) { }

  ngOnInit() {
    this.keyboard.show();
  }

  goVerify()
  {
    this.navCtrl.navigateForward('otp/verify/' + this.mobileNo);
    
    this.authService.sendOTP(this.mobileNo).subscribe(
        (data) => {},
        (error) => {
      console.log('Failed to send OTP!', error)},
    () => {
      this.navCtrl.navigateForward('otp/verify/' + this.mobileNo);
    });
    
  }

}
