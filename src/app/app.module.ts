import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FCM } from '@ionic-native/fcm/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import {HttpTokenInterceptor} from './core/interceptors/token.interceptor';
import {ApiURLInterceptor} from './core/interceptors/api-url.interceptor';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMaps } from '@ionic-native/google-maps/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
// import{selectTimePreferenceModule } from '././module/profile/job-preference2/select-time-preference.module'
import{SelectTimePageModule} from '../app/module/profile/job-preference2/select-time/select-time.module';
import{SetHourlyRatesPageModule} from '../app/core/components/set-hourly-rates/set-hourly-rates.module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SelectTimePageModule,
    SetHourlyRatesPageModule
  ],
  providers: [
    FCM,
    BackgroundMode,
    StatusBar,
    SplashScreen,
    Keyboard,
    Geolocation,
    GoogleMaps,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
   // { provide: HTTP_INTERCEPTORS, useClass: ApiURLInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
