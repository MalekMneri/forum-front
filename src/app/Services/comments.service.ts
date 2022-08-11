import { Commentaire } from 'src/app/Models/Commentaire';
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

  likeComment(comment: Commentaire) {
    let UserId = JSON.parse(localStorage.getItem('user') || '{}').idUser;
    let like = {
      commentaire: comment,
      user: JSON.parse(localStorage.getItem('user') || ''),
    };
    console.log(like);
    return this.http.post(
      this.apiRoute + 'like/' + comment.idCom?.toString(),
      like
    );
  }
}
