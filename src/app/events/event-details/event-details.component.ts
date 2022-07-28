import { NgForm } from '@angular/forms';
import { CommentsService } from './../../Services/comments.service';
import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/Models/Commentaire';
import { Event } from 'src/app/Models/Event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  commentaires: Commentaire[] = [
    {
      idCom: 1,
      commentateur: 'Commentateur 1',
      comment: 'Comment 1',
      dateCreation: new Date(),
      nbrlikes: 12,
      useful: true,
      event: 1,
    },
    {
      idCom: 2,
      commentateur: 'Commentateur 2',
      comment: 'Comment 2',
      dateCreation: new Date(),
      nbrlikes: 5,
      useful: false,
      event: 1,
    },
    {
      idCom: 3,
      commentateur: 'Commentateur 3',
      comment: 'Comment 3',
      dateCreation: new Date(),
      nbrlikes: 3,
      useful: true,
      event: 1,
    },
  ];
  event: Event = {
    idEvent: 1,
    titre: 'Event 1',
    description: 'Description 1',
    dateCreation: new Date(),
    dateCloture: new Date(),
    Solved: true,
    pieceJointe: '',
    user: 1,
  };
  constructor(private commentService: CommentsService) {}

  ngOnInit(): void {}

  addComment(commentForm: NgForm) {
    commentForm.value.event = this.event.idEvent;
    commentForm.value.commentateur = 'Commentateur 1';
    commentForm.value.dateCreation = new Date();
    commentForm.value.nbrlikes = 0;
    commentForm.value.useful = false;
    console.log(commentForm.value);
    this.commentService.addComment(commentForm.value).subscribe(() => {
      this.commentaires.push(commentForm.value);
      commentForm.reset();
    });
  }
}
