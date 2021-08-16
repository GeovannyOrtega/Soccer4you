import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private loadingController: LoadingController) { }

  ngOnInit() {
  }

  mostrarLoading(){
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'iniciando...',
      duration: 2000
    });
    await loading.present();
  }
}
