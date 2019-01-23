import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { InfoPage } from '../info/info';
import { ListaPage } from '../lista/lista';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Info=InfoPage;
  Lista=ListaPage;
  lista=[];
  
  List=
  [
    {imagen:"../assets/Casa 1.jpg", producto: "Casa en venta", ubicacion: "Valle Imperial, Zapopan", precio: "$3,700,000.00", antiguedad: "0 años", terreno: "158 m2", construccion: "195 m2", cuartos: "4", banos: "4", nombre: "Miguel Beruti ", tel: "3360592311"},
    {imagen:"../assets/Casa 2.jpeg", producto: "Casa en venta", ubicacion: "Hacienda Real, Tonala", precio: "$1,090,000.00", antiguedad: "0 años", terreno: "99 m2", construccion: "92 m2", cuartos: "3", banos: "2.5", nombre: "Celina Catro", tel: "3121-2403"},
    {imagen:"../assets/Casa 3.jpg", producto: "Casa en venta", ubicacion: "Chapalita,Zapopan", precio: "$5,100,000.00", antiguedad: "0 años", terreno: "150 m2", construccion: "100 m2", cuartos: "4", banos: "3", nombre: "Fernando Toledo", tel: "3314578525"},  
    {imagen:"../assets/Casa 4.jpg", producto: "Casa en venta", ubicacion: "Bugambilias,Zapopan", precio: "$6,950,000.00", antiguedad: "0 años", terreno: "490 m2", construccion: "410 m2", cuartos: "3", banos: "3",  nombre: "Celina Castro", tel: "3121-2403"},
    {imagen:"../assets/Casa 5.jpg", producto: "Casa en renta", ubicacion: "Jardin Real,Zapopan", precio: "$6,200,000.00", antiguedad: "13 años", terreno: "225 m2", construccion: "410 m2", cuartos: "3", banos: "3",  nombre: "Laura Arroyo", tel: "3313153868"},    
    {imagen:"../assets/Casa 6.jpg", producto: "Casa en venta", ubicacion: "Bosques de la Victoria,Guadalajara", precio: "$7,800,000.00", antiguedad: "12 años", terreno: "346 m2", construccion: "529 m2", cuartos: "3", banos: "4", nombre: "Antonio Reveles", tel: "3313327610"},  
    {imagen:"../assets/Casa 7.jpg", producto: "Casa en venta", ubicacion: "Verde Valle, Guadalajara", precio: "$14,500,000.00", antiguedad: "0 años", terreno: "754 m2", construccion: "682 m2", cuartos: "3", banos: "7", nombre: "Juan Olmedo", tel: "3312830710"},
    {imagen:"../assets/Casa 8.jpg", producto: "Casa en venta", ubicacion: " Puerta de Hierro, Zapopan", precio: "$14,490,000.00", antiguedad: "2 años", terreno: "466 m2", construccion: "400 m2", cuartos: "4", banos: "4", nombre: "Fernando Toledo", tel: "3314578525"},
    {imagen:"../assets/Casa 9.png", producto: "Casa en venta", ubicacion: "Ciudad del Sol,Zapopan", precio: "$9,800,000.00", antiguedad: "0 años", terreno: "600 m2", construccion: "500 m2", cuartos: "4", banos: "3", nombre: "Edith Gonzalez", tel: "3322193231"},     
    {imagen:"../assets/Casa 10.jpg", producto: "Casa en venta", ubicacion: "Lomas del Valle, Zapopan", precio: "$17,000,000.00", antiguedad: "30 años", terreno: "1125 m2", construccion: "480 m2", cuartos: "4", banos: "4", nombre: "Tania Macias", tel: "3313988570"},     
  ]
    constructor(public navCtrl: NavController, public navParams: NavParams) 
      {
        
      }
    
    
  
    clickinfo(a)
    {
      this.navCtrl.push(this.Info, {producto:a, lista:this.lista});
    }
    clicklista()
    {
      this.navCtrl.push(this.Lista, {listas:this.lista});
    }
  }
  