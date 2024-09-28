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
        id: "",
        nombre: "Thriller",
        alt: "Michel Jackson",
        instrumento: "",
        edad:  1982,
        imagen: "https://colectivosonoro.com/wp-content/uploads/2016/11/michael-jackson.jpeg",
      },
      {
        id: "",
        nombre: "Song Machine",
        alt: "Gorillaz",
        instrumento: "",
        edad:  2020,
        imagen: "https://indiehoy.com/wp-content/uploads/2020/11/Gorillaz-song-machine.jpg",
      },
      {
        id: "",
        nombre: "Oktubre",
        alt: "Redonditos de Ricota",
        instrumento: "",
        edad: 1986,
        imagen: "https://www.cmtv.com.ar/tapas-cd/redondosoktubre.webp",
      },
      {
        id: "",
        nombre: "Civilizacion",
        alt: "Los Piojos",
        instrumento: "",
        edad: 2007,
        imagen: "https://i.scdn.co/image/ab67616d0000b2738ef0a8bde9750f9f219495d0",
      },
      {
        id: "",
        nombre: "Señales",
        alt: "Callegeros",
        instrumento: "",
        edad: 2006,
        imagen: "https://i.scdn.co/image/ab67616d0000b273c2a9bdace7dc75d29cc6cd14",
      },
    ]
  }
}
