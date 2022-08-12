import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  apiRoute: string;
  constructor(private http: HttpClient) {
    this.apiRoute = 'http://localhost:8081/';
  }

  getEvents() {
    return this.http.get<any>(this.apiRoute + 'events');
  }
  search(seachTerm: string) {
    return this.http.get<any>(this.apiRoute + 'searche/' + seachTerm);
  }
  addEvent(event: Event) {
    console.log(event);
    return this.http.post<any>(this.apiRoute + 'adde', event);
  }

  getEvent(id: string) {
    return this.http.get<any>(this.apiRoute + 'event/' + id);
  }
  deleteEvent(id: string) {
    return this.http.delete<any>(this.apiRoute + 'deletee/' + id);
  }
  editEvent(event: Event, id: string) {
    return this.http.put<any>(this.apiRoute + 'edite/' + id, event);
  }
  validateEvent(id: string) {
    return this.http.put<any>(this.apiRoute + 'validateEvent/' + id, null);
  }
}
