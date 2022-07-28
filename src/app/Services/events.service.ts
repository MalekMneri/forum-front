import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<any>('/api/events');
  }
  addEvent(event: Event) {
    return this.http.post<any>('/adde', event);
  }
}
