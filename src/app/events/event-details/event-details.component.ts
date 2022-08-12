import { NgForm } from '@angular/forms';
import { CommentsService } from './../../Services/comments.service';
import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/Models/Commentaire';
import { Event } from 'src/app/Models/Event';
import { EventsService } from '../../Services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  commentaires: Commentaire[] = [];
  event: Event = {
    idEvent: 0,
    titre: '',
    description: '',
    dateCreation: new Date(),
    dateCloture: new Date(),
    Solved: true,
    pieceJointe: '',
    user: 0,
  };
  errorCommentId: number = 0;
  idEvent = '0';
  constructor(
    private route: ActivatedRoute,
    private commentService: CommentsService,
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.idEvent = this.route.snapshot.paramMap.get('id') || '0';
    this.eventsService.getEvent(this.idEvent).subscribe((data) => {
      console.log(data);
      this.event = data;
    });
    this.getComments(this.idEvent);
  }
  getComments(id: string) {
    this.commentService.getCommentsByEvent(id).subscribe((data: any) => {
      console.log(data);
      this.commentaires = data;
    });
  }

  addComment(commentForm: NgForm) {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    commentForm.value.event = this.event.idEvent;
    commentForm.value.user = user;
    commentForm.value.dateCreation = new Date();
    commentForm.value.nbrlikes = 0;
    commentForm.value.useful = false;
    console.log(commentForm.value);

    this.commentService
      .addComment(commentForm.value, this.idEvent)
      .subscribe(() => {
        this.getComments(this.idEvent);
        commentForm.reset();
      });
  }

  likeComment(comment: Commentaire) {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(user, comment.likes);
    if (!comment.likes?.find((like) => like.user.idUser === user.idUser)) {
      this.commentService.likeComment(comment).subscribe((data: any) => {
        this.getComments(this.idEvent);
      });
    } else {
      this.errorCommentId = comment.idCom || 0;
      setTimeout(() => {
        this.errorCommentId = 0;
      }, 2000);
    }
  }
}
