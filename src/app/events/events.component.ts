import { Component, OnInit } from '@angular/core';
import { Event } from '../Models/Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: Event[] = [
    {
      idEvent: 1,
      titre: 'Event 1',
      description: 'Description 1',
      dateCreation: new Date(),
      dateCloture: new Date(),
      Solved: true,
      pieceJointe: '',
      user: 1,
    },
    {
      idEvent: 2,
      titre: 'Event 2',
      description: 'Description 2',
      dateCreation: new Date(),
      dateCloture: new Date(),
      Solved: false,
      pieceJointe: '',
      user: 1,
    },
    {
      idEvent: 3,
      titre: 'Event 3',
      description: 'Description 3',
      dateCreation: new Date(),
      dateCloture: new Date(),
      Solved: true,
      pieceJointe: '',
      user: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
