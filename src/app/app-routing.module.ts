import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./module/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'intro',
    loadChildren: () => import('./module/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'phoneinput',
    loadChildren: () => import('./auth/phoneinput/phoneinput.module').then( m => m.PhoneinputPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./auth/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./module/job/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'basic-details',
    loadChildren: () => import('./module/profile/basic-details/basic-details.module').then( m => m.BasicDetailsPageModule)
  },
  {
    path: 'select-location',
    loadChildren: () => import('./auth/select-location/select-location.module').then( m => m.SelectLocationPageModule)
  },
  {
    path: 'upload-photos',
    loadChildren: () => import('./module/profile/upload-photos/upload-photos.module').then( m => m.UploadPhotosPageModule)
  },
  {
    path: 'add-new-experience',
    loadChildren: () => import('./module/profile/add-new-experience/add-new-experience.module').then( m => m.AddNewExperiencePageModule)
  },
  {
    path: 'job-preference1',
    loadChildren: () => import('./module/profile/job-preference1/job-preference1.module').then( m => m.JobPreference1PageModule)
  },
  {
    path: 'job-preference2',
    loadChildren: () => import('./module/profile/job-preference2/job-preference2.module').then( m => m.JobPreference2PageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'job-view',
    loadChildren: () => import('./module/job/job-view/job-view.module').then( m => m.JobViewPageModule)
  },
  {
    path: 'job-search',
    loadChildren: () => import('./module/job/job-search/job-search.module').then( m => m.JobSearchPageModule)
  },
  {
    path: 'set-hourly-rates',
    loadChildren: () => import('./core/components/set-hourly-rates/set-hourly-rates.module').then( m => m.SetHourlyRatesPageModule)
  },
  
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
