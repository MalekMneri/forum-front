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
    return this.http.get<any>(this.apiRoute+'events');
  }
  search(seachTerm: string) {
    return this.http.get<any>('/searche/' + seachTerm);
  }
  addEvent(event: Event) {
    console.log(event);
    return this.http.post<any>(this.apiRoute + 'adde', event);
  }

  getEvent(id: string) {
    return this.http.get<any>(this.apiRoute + 'event/' + id);
  }
}
