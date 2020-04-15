import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(public toastController: ToastController) { }

  async showMessage(message: string, duration: number) {

      const toast = await this.toastController.create({
        message: message,
        duration: duration
      });
      toast.present();
    }
}
