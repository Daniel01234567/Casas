
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaPage } from '../lista/lista';


@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  Lista=ListaPage;
  lista;
  producto;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.producto=this.navParams.get('producto');
    this.lista=this.navParams.get('lista');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  clickAgregar()
  {
    this.lista.push(this.producto);
    this.navCtrl.pop();
  }

}
