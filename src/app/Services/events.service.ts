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
    return this.http.get<any>('/api/events');
  }
  search(seachTerm: string) {
    return this.http.get<any>('/searche/' + seachTerm);
  }
  addEvent(event: Event) {
    return this.http.post<any>(this.apiRoute + 'adde', event);
  }
}
