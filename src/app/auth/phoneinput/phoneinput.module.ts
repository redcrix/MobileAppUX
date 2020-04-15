import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PhoneinputPage } from './phoneinput.page';
import {Keyboard} from '@ionic-native/keyboard/ngx';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PhoneinputPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    Keyboard
  ],
  declarations: [PhoneinputPage]
})
export class PhoneinputPageModule {}
