import { Component } from '@angular/core';
import { Banda } from 'src/app/models/banda';

@Component({
  selector: 'app-accesorio',
  templateUrl: './accesorio.component.html',
  styleUrls: ['./accesorio.component.css']
})
export class AccesorioComponent {
  public info: Banda[];
  constructor() {
    this.info = [
      {
        id: "30.000",
        nombre: "CD Importado",
        alt: "Shawn Mendes",
        lanzamiento:  1982,
        musica:"",
        genero:"",
        imagen: "https://umusicstore.com.ar/cdn/shop/files/CD_STANDARD_SHAWN_MENDES_copia.jpg?v=1722625429&width=800",
      },
      {
        id: "40.000",
        nombre: "Rayo CD Importado",
        alt: "JBalvin",
        lanzamiento:  2020,
        musica:"",
        genero:"",
        imagen: "https://umusicstore.com.ar/cdn/shop/files/JBalvin_Standard-CD-Front-Disco.webp?v=1721143629&width=800",
      },
      {
        id: "40.000",
        nombre: "Short Sweet CD",
        alt: "Sabrina Carpenter",
        lanzamiento: 1986,
        musica:"",
        genero:"",
        imagen: "https://umusicstore.com.ar/cdn/shop/files/Final-CD.webp?v=1717517014&width=800",
      },
      {
        id: "25.000",
        nombre: "No Le temas a la oscuridad",
        alt: "Feid",
        lanzamiento: 2007,
        musica:"",
        genero:"",
        imagen: "https://umusicstore.com.ar/cdn/shop/files/Layers-Mockup_Cd_template02.gif?v=1692976079&width=1200",
      },
      {
        id: "60.000",
        nombre: "With The Beatles CD",
        alt: "The Beatles",
        lanzamiento: 2006,
        musica:"",
        genero:"",
        imagen: "https://umusicstore.com.ar/cdn/shop/files/with-the-beatles-cd.webp?v=1710271835&width=800",
      },
    ]
  }
}
