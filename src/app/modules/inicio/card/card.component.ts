import { Component } from '@angular/core';
import { Banda } from 'src/app/models/banda';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Banda[];

  constructor() {
    this.info = [
      {
        id: "70.000",
        nombre: "Thriller",
        alt: "Michel Jackson",
        lanzamiento:  1982,
        musica:"",
        genero:"",
        imagen: "https://colectivosonoro.com/wp-content/uploads/2016/11/michael-jackson.jpeg",
      },
      {
        id: "20.000",
        nombre: "Song Machine",
        alt: "Gorillaz",
        lanzamiento:  2020,
        musica:"",
        genero:"",
        imagen: "https://indiehoy.com/wp-content/uploads/2020/11/Gorillaz-song-machine.jpg",
      },
      {
        id: "15.000",
        nombre: "Oktubre",
        alt: "Redonditos de Ricota",
        lanzamiento: 1986,
        musica:"",
        genero:"",
        imagen: "https://www.cmtv.com.ar/tapas-cd/redondosoktubre.webp",
      },
      {
        id: "30.000",
        nombre: "Civilizacion",
        alt: "Los Piojos",
        lanzamiento: 2007,
        musica:"",
        genero:"",
        imagen: "https://i.scdn.co/image/ab67616d0000b2738ef0a8bde9750f9f219495d0",
      },
      {
        id: "15.000",
        nombre: "Señales",
        alt: "Callegeros",
        lanzamiento: 2006,
        musica:"",
        genero:"",
        imagen: "https://i.scdn.co/image/ab67616d0000b273c2a9bdace7dc75d29cc6cd14",
      },
    ]
  }
}
