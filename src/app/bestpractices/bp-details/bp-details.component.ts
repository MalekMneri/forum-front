import { Commentaire } from './../../Models/Commentaire';
import { BestPractice } from './../../Models/BestPractice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bp-details',
  templateUrl: './bp-details.component.html',
  styleUrls: ['./bp-details.component.css'],
})
export class BpDetailsComponent implements OnInit {
  constructor() {}
  bp: BestPractice = {
    idBP: 1,
    titre: 'Best Practice 1',
    description: 'Description 1',
    dateCreation: new Date(),
    pieceJointe: '',
    valid: true,
  };
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
  ngOnInit(): void {}
}
