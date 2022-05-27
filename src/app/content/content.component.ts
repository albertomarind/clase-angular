import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  cards: Card[] = [
    {
      image: 'https://i.ytimg.com/vi/EoZFxj-qhUY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDO0xToyEgqrA6b_t8VYwdbL3zIpA',
      channel: 'Mi canal',
      date: 'Hace 6 meses',
      timer: '20:00',
      title: 'Mi titulo',
      views: 20
    },
    {
      image: 'https://i.ytimg.com/vi/EoZFxj-qhUY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDO0xToyEgqrA6b_t8VYwdbL3zIpA',
      channel: 'Mi canal 3',
      date: 'Hace 12 meses',
      timer: '05:00',
      title: 'Mi titulo',
      views: 50
    },
    {
      image: 'https://i.ytimg.com/vi/EoZFxj-qhUY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDO0xToyEgqrA6b_t8VYwdbL3zIpA',
      channel: 'Mi canal 3',
      date: 'Hace 2 años',
      timer: '10:00',
      title: 'Mi titulo 3',
      views: 2
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  agregarCard(event: any) {
    console.log(event.target.innerText);
    event.target.style.color = 'red';
    this.cards.push({
      image: 'https://i.ytimg.com/vi/EoZFxj-qhUY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDO0xToyEgqrA6b_t8VYwdbL3zIpA',
      channel: 'Mi canal 3',
      date: 'Hace 2 años',
      timer: '10:00',
      title: 'Mi titulo 3',
      views: 2
    });
  }

}
