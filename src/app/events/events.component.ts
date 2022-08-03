import { EventsService } from './../Services/events.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Event } from '../Models/Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  searchTerm = '';
  events: Event[] = [];
  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }
  addEvent(event: any, eventForm: NgForm) {
    event.preventDefault();
    let userObj = JSON.parse(localStorage.getItem('user') || '');
    eventForm.value.user = userObj.idUser;
    this.eventService.addEvent(eventForm.value).subscribe((data) => {
      this.getEvents();
    });
  }
  search() {
    if (this.searchTerm.length === 0) this.getEvents();
    this.eventService.search(this.searchTerm).subscribe((data) => {
      console.log(data);
      this.events = data;
    });
  }
}
