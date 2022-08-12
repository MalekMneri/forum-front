import { EventsService } from './../../Services/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css'],
})
export class EventsTableComponent implements OnInit {
  constructor(private eventsService: EventsService) {}
  events: any[] = [];
  searchTerm = '';
  ngOnInit(): void {
    this.getEvents();
  }
  getEvents() {
    this.eventsService.getEvents().subscribe((data) => {
      this.events = data;
      console.log(this.events);
    });
  }

  deleteEvent(id: number) {
    this.eventsService.deleteEvent(id.toString()).subscribe((data) => {
      this.getEvents();
    });
  }
  searchEvents() {
    if (this.searchTerm.length === 0) this.getEvents();
    this.eventsService.search(this.searchTerm).subscribe((data) => {
      this.events = data;
    });
  }
  validateEvent(id: number) {
    this.eventsService.validateEvent(id.toString()).subscribe((data) => {
      this.getEvents();
    });
  }
}
