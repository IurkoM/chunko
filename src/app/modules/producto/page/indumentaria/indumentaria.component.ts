import { Component } from '@angular/core';
import { Banda } from 'src/app/models/banda';

@Component({
  selector: 'app-indumentaria',
  templateUrl: './indumentaria.component.html',
  styleUrls: ['./indumentaria.component.css']
})
export class IndumentariaComponent {
  public info: Banda[];
  constructor() {
    this.info = [
      {
        id: "20.000",
        nombre: "Vinilo Purple Importado",
        alt: "Katy Perry",
        lanzamiento:  20.000,
        musica:"",
        genero:"",
        imagen: "https://umusicstore.com.ar/cdn/shop/files/BETTY-LOVE-_Music-Mocks_D2C-Exclusive-Vinyl-Front.png?v=1721138226&width=600",
      },
      {
        id: "40.000",
        nombre: "Vinilo Milky White",
        alt: "Billie Eilish",
        lanzamiento:  40.000,
        musica:"",
        genero:"",
        imagen: "https://umusicstore.com.ar/cdn/shop/files/Hit-me-hard-and-soft-vinilo-MilkyWhite-exclusivo.png?v=1725474519&width=600",
      },
      {
        id: "15.000",
        nombre: "Vinilo Hola Mundo",
        alt: "Tan Bionica",
        lanzamiento: 15.000,
        musica:"",
        genero:"",
        imagen: "https://umusicstore.com.ar/cdn/shop/files/hola-mundo-vinilo.png?v=1723668210&width=800",
      },
      {
        id: "50.000",
        nombre: "Vinilo Tangerine Edition",
        alt: "Taylor Swift",
        lanzamiento: 50.000,
        musica:"",
        genero:"",
        imagen: "https://umusicstore.com.ar/cdn/shop/files/LP5_With_Discs.png?v=1695394885&width=600",
      },
      {
        id: "30.000",
        nombre: "Vinilo Sheer Heart Attack",
        alt: "Queen",
        lanzamiento: 30000,
        musica:"",
        genero:"",
        imagen: "https://umusicstore.com.ar/cdn/shop/products/D_NQ_NP_609007-MLA48357029880_112021-W.jpg?v=1667593146&width=600",
      },
    ]
  }
}
