import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
 
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  lists;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.lists=this.navParams.get('listas');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

}



