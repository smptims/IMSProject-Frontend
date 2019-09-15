import { Injectable } from "@angular/core";
import { LoadingController, ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please wait....."
    });
    await loading.present();
  }

  dismissLoading() {
    this.loadingController.dismiss();
  }

  async presentToast(messageToToast: string) {
    const toast = await this.toastController.create({
      message: messageToToast,
      position: "middle",
      duration: 3000
    });
    toast.present();
  }
}
