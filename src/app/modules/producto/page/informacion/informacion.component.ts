import { Component } from '@angular/core';
import { Banda } from 'src/app/models/banda';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  public info: Banda[];
  constructor() {
    this.info = [
      {
        id: "12.000",
        nombre: "The Touring Years",
        alt: "The Beatles",
        lanzamiento:  1982,
        musica:"",
        genero:"",
        imagen: "https://umusicstore.com.ar/cdn/shop/files/descarga_1.jpg?v=1698778571&width=600",
      },
      {
        id: "25.000",
        nombre: "Charlie is my Darling",
        alt: "Rolling Stones",
        lanzamiento:  2020,
        musica:"",
        genero:"",
        imagen: "https://umusicstore.com.ar/cdn/shop/files/71v3f9Xl6UL._AC_UL420_SR420_420.jpg?v=1698762650&width=600",
      },
      {
        id: "8.000",
        nombre: "Some Kind Of Monster",
        alt: "Metallica",
        lanzamiento: 1986,
        musica:"",
        genero:"",
        imagen: "https://umusicstore.com.ar/cdn/shop/products/matt2.jpg?v=1636045900&width=600",
      },
      {
        id: "15.000",
        nombre: "20 años al viento",
        alt: "Luciano Pereyra",
        lanzamiento: 2007,
        musica:"",
        genero:"",
        imagen: "https://umusicstore.com.ar/cdn/shop/products/060257769504_Luciano_Pereyra_20_Anos_al_viento-CD_DVD.jpg?v=1627680116&width=600",
      },
      {
        id: "12.000",
        nombre: "Help",
        alt: "The Beatles",
        lanzamiento: 2006,
        musica:"",
        genero:"",
        imagen: "https://umusicstore.com.ar/cdn/shop/files/help-blu-ray-front.webp?v=1710272048&width=800",
      },
    ]
  }
}
