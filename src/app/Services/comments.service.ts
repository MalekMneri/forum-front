import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  apiRoute = 'http://localhost:8081/';
  constructor(private http: HttpClient) {}
  addComment(comment: any, idEvent: string) {
    return this.http.post(this.apiRoute + 'addc/' + idEvent, comment);
  }
  getCommentsByEvent(idEvent: string) {
    return this.http.get(this.apiRoute + 'commentaires/' + idEvent);
  }
}
